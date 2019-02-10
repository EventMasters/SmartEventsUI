import React, {Component} from 'react';
import  { withStyles, Divider,Drawer, Typography, ListSubheader } from '@material-ui/core/';
import {bindActionCreators} from 'redux';
import {FuseScrollbars} from '@fuse';
import {connect} from 'react-redux';
import * as Actions from './store/actions/index'
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import moment from 'moment';


const styles = theme => ({
    root: {
        width  : 280
       
    }
});

class QuickPanel extends Component {

    state = {
        checked: ['notifications']
    };

    handleToggle = value => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if ( currentIndex === -1 )
        {
            newChecked.push(value);
        }
        else
        {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        });
    };

    componentDidMount()
    {
        this.props.getQuickPanelData();
    }

    render()
    {
        const {classes, state, toggleQuickPanel} = this.props;
        return (
            <Drawer
                classes={{paper: classes.root}}
                open={state}
                anchor="right"
                onClose={() => toggleQuickPanel(false)}
            >
             <FuseScrollbars>
             <ListSubheader component="div">Today</ListSubheader>

             <div className="mb-0 py-16 px-24">
                        <Typography className="mb-12 text-32" color="textSecondary">
                            {moment().format('dddd')}
                        </Typography>
                        <div className="flex">
                            <Typography className="leading-none text-32" color="textSecondary">{moment().format('DD')}</Typography>
                            <Typography className="leading-none text-16" color="textSecondary">th</Typography>
                            <Typography className="leading-none text-32" color="textSecondary">{moment().format('MMMM')}</Typography>
                        </div>
            </div>
            <Divider/>
            <ListSubheader component="div">Events</ListSubheader>
            

            </FuseScrollbars>
            </Drawer>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleQuickPanel: Actions.toggleQuickPanel,
        getQuickPanelData: Actions.getQuickPanelData
    }, dispatch);
}

function mapStateToProps({quickPanel})
{
    return {
        state: quickPanel.state,
        data:  quickPanel.data
    }
}

export default withReducer('quickpanel',reducer)(withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(QuickPanel)));
