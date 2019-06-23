import React from 'react';
import {Redirect, withRouter, Router, Route, Switch} from 'react-router-dom';

import {useSelector, shallowEqual} from "react-redux";
import clsx from "clsx";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

import Dashboard from './Dashboard';
import Bookings from '../bookings/Bookings';
import BookingForm from "../bookings/BookingForm";
import {error404} from "../utils/errors";
import {MainListItems, secondaryListItems} from "./listItems";
import {useStyles} from "./styles";

const DashboardRouter = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const [logged] = useSelector(state => [state.Login.logged], shallowEqual);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    let title = props.location.pathname.split('/');
    title = title[1];
    title = title === '' ? 'Dashboard' : title.charAt(0).toUpperCase() + title.slice(1);

    if (!logged)
        return (<Redirect to={'/login'}/>);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {title}
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <MainListItems link={(link) => props.history.push(link)}/>
                </List>
                <Divider/>
                {/*<List>{secondaryListItems}</List>*/}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Router history={props.history}>
                    <Switch>
                        <Route exact path={'/'} component={Dashboard}/>
                        <Route exact path={'/booking/:id'} component={BookingForm}/>
                        <Route exact paht={'/bookings'} component={Bookings}/>
                        <Route component={error404}/>
                    </Switch>
                </Router>
            </main>
        </div>
    );
};

export default withRouter(DashboardRouter);