import React, {Component} from 'react';
import { Hidden,Button, Icon, ListItemText, ListItemIcon,Popover, MenuItem, Typography,Paper,ClickAwayListener,MenuList} from '@material-ui/core';
import {connect} from 'react-redux';
import * as authActions from 'app/auth/store/actions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import classNames from "classnames";

class Notification extends Component
{

    state = {
        notification: null,
        open :false
    };
    notificationClick = event => {
        this.setState({notification: event.currentTarget});
    };

    notificationClose = () => {
        this.setState({notification: null});
    };
   

    render()
    {
        const {user, logout} = this.props;
        const {notification} = this.state;
        
        
        return (
            <React.Fragment>

                <Button className="h-64" onClick={this.notificationClick}>
               
                <Icon className="text-24 ml-12 hidden sm:flex" variant="action">notifications</Icon>
               
                <Icon className="text-16 ml-10 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
                </Button>
                <Popover
                    open={Boolean(notification)}
                    anchorEl={notification}
                    onClose={this.notificationClose}
                    anchorOrigin={{
                        vertical  : 'bottom',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical  : 'top',
                        horizontal: 'center'
                    }}
                    classes={{
                        paper: "py-12"
                    }}
                >
                    {user.role === 'guest' ? (
                        <React.Fragment>
                            <MenuItem component={Link} to="/login">
                                <ListItemIcon>
                                    <Icon>lock</Icon>
                                </ListItemIcon>
                                <ListItemText className="pl-0" primary="Login"/>
                            </MenuItem>
                            <MenuItem component={Link} to="/register">
                                <ListItemIcon>
                                    <Icon>person_add</Icon>
                                </ListItemIcon>
                                <ListItemText className="pl-0" primary="Register"/>
                            </MenuItem>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <MenuItem
                        onClick={this.handleClose}>
                        Mike responded to your email
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                      >
                        You have 5 new tasks
                      </MenuItem>
                             
                        </React.Fragment>
                    )}
                </Popover>

                
            </React.Fragment>
        );
    }



}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        logout: authActions.logoutUser
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        user: auth.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification);