import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HotelIcon from '@material-ui/icons/Hotel'
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const MainListItems = (props) => {
    const link = props.link;

    return (
        <div>
            <ListItem button onClick={() => link('/')}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
            <ListItem button onClick={() => link('/bookings')}>
                <ListItemIcon>
                    <HotelIcon/>
                </ListItemIcon>
                <ListItemText primary="Bookings"/>
            </ListItem>
            {/*<ListItem button>*/}
            {/*    <ListItemIcon>*/}
            {/*        <PeopleIcon/>*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="Customers"/>*/}
            {/*</ListItem>*/}
            {/*<ListItem button>*/}
            {/*    <ListItemIcon>*/}
            {/*        <BarChartIcon/>*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="Reports"/>*/}
            {/*</ListItem>*/}
            {/*<ListItem button>*/}
            {/*    <ListItemIcon>*/}
            {/*        <LayersIcon/>*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="Integrations"/>*/}
            {/*</ListItem>*/}
        </div>);
};

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Current month"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Last quarter"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Year-end sale"/>
        </ListItem>
    </div>
);