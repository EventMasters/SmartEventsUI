import React, {Component} from 'react';
import {withStyles,Typography,Card} from '@material-ui/core/styles';
import {Icon} from '@material-ui/core';
import {FusePageSimple, DemoContent,FuseAnimate} from '@fuse';
import Dashboard from 'app/main/dashboard/Dashboard';
import Widget9 from './widgets/Widget9';

const styles = theme => ({
    layoutRoot: {}
});

class Example extends Component {

    render()
    {
        const {classes} = this.props;
        const {widgets} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <FuseAnimate animation={{ translateX: [0, '100%'],opacity   : [1, 0]
                    }}
                    duration={400}
                    delay={400}
                >
                <div className="p-20">
                Welcome User ! 
                <br/> 
                <br/>  
                Event planning , organising starts here !
                <br/>
                
                    {/* <Card className={this.props.classes.box}>
                        <Typography>
                            Slide left and fade in
                        </Typography>
                    </Card> */}
              
                </div>
                </FuseAnimate>
                }
                // contentToolbar={
                //     <div className="px-24"><h4></h4></div>
                // }
                content={
                    <div className="p-24">
                        
                        <Dashboard/>
                        
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Example);