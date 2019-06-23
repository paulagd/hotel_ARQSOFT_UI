import React from 'react';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

import {useStyles} from './styles'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getBookings} from "../../actions/bookings";

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
            {' team.'}
        </Typography>
    );
}

export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [bookings] = useSelector(state => [state.Booking.bookings], shallowEqual);

    React.useEffect(() => {
        getBookings()(dispatch);
    }, [dispatch]);

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const todayBookings = bookings.filter(booking => {
        if (booking.STATUS === 'CHECKED_IN')
            return true;

        return booking.STATUS === 'OPEN' && (new Date(booking.CHECKIN).getTime() < new Date().getTime() || new Date(booking.CHECKIN).getDate() === new Date());
    });

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    {/*<Grid item xs={12} md={8} lg={9}>*/}
                    {/*    <Paper className={fixedHeightPaper}>*/}
                    {/*        <Chart/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}
                    {/*/!* Recent Deposits *!/*/}
                    {/*<Grid item xs={12} md={4} lg={3}>*/}
                    {/*    <Paper className={fixedHeightPaper}>*/}
                    {/*        <Deposits/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Orders bookings={todayBookings}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <MadeWithLove/>
        </div>
    );
}