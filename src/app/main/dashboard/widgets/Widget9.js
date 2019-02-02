import React from 'react';
import {withStyles, Button, Card, Divider, Icon, IconButton, Typography,AppBar} from '@material-ui/core';

const Widget9 = ({data}) => {
    return (
        <Card className="w-full rounded-8 shadow-none border-1">
          <AppBar position="static">
            <div className="p-16 pr-4 flex flex-row items-center justify-between">

                <Typography className="h1 pr-16">Event History</Typography>

                <div>
                    <IconButton aria-label="more">
                        <Icon>more_vert</Icon>
                    </IconButton>
                </div>
                
            </div>
            <Divider className="card-divider w-full"/>
            </AppBar>
            <table className="simple clickable">
                <thead>
                    <tr>
                        <th className="text-left">Role</th>
                        <th className="text-right">Attended</th>
                        {/* <th className="text-right">Conv</th> */}
                        
                    </tr>
                </thead>
                <tbody>
                    {/* {data.rows.map(row => ( */}
                        <tr >
                            <td>Host</td>
                            <td className="text-right">2</td>
                            
                        </tr>
                    {/* ))} */}
                    {/* {data.rows.map(row => ( */}
                        <tr >
                            <td>Co-Host</td>
                            <td className="text-right">2</td>
                            
                        </tr>
                    {/* ))} */}
                </tbody>
            </table>

            {/* <Divider className="card-divider w-full"/> */}

            <div className="p-8 pt-16 flex flex-row items-center">
                {/* <Button>GO TO CAMPAIGNS</Button> */}
            </div>
        </Card>
    );
};

export default withStyles(null, {withTheme: true})(Widget9);
