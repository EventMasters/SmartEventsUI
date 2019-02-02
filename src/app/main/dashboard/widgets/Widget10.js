import React from 'react';
import {withStyles, Button, Card, Divider, Icon, IconButton, Typography,AppBar,Paper,Input} from '@material-ui/core';

const Widget9 = ({data,searchText,setSearchText}) => {
    return (
        <Card className="w-full rounded-8 shadow-none border-1">
        <AppBar position="static">

            <div className="p-16 pr-4 flex flex-row items-center justify-between">

                <Typography className="h1 pr-10">Upcoming Events</Typography>
                 
                <div>
                    {/* <IconButton aria-label="more">
                        <Icon>search</Icon>
                    </IconButton> */}
                    <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>

                        <Icon className="mr-8" color="action">search</Icon>

                        <Input
                            placeholder="Search"
                            className="flex flex-1"
                            disableUnderline
                            fullWidth
                            value={searchText}
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                            onChange={setSearchText}
                        />
                    </Paper>
                </div>  
            </div>
            <Divider className="card-divider w-full"/>
            </AppBar>
            <table className="simple clickable">
                <thead>
                    <tr>
                    
                        <th className="text-left"> Event Name</th>
                        <th className="text-center">Date</th>
                        <th className="text-center">RSVP Status</th>
                        <th className="text-center">Event Status</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map(row => (
                        <tr key={row.title}>
                            <td>{row.title}</td>
                            <td className="text-center">{row.clicks}</td>
                            <td className="text-center">{row.conversion}</td>
                            <td className="text-center">{row.event_status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <Divider className="card-divider w-full"/>

            <div className="p-8 pt-16 flex flex-row items-center">
                <Button>GO TO CAMPAIGNS</Button>
            </div> */}

            
        </Card>
    );
};

export default withStyles(null, {withTheme: true})(Widget9);
