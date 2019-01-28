import React from 'react';
import {AppBar, MuiThemeProvider, Toolbar} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';

const FooterLayout3 = ({classes, footerTheme}) => {
    return (
        <MuiThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                <Toolbar className="flex items-center container py-0 px-16 lg:px-24">

                    <div className="flex flex-1">
                    Copyrights &copy; SmartEvents
                    </div>

                    <div>
                    </div>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        footerTheme: fuse.settings.footerTheme
    }
}

export default connect(mapStateToProps)(FooterLayout3);
