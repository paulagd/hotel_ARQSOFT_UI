import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom';
import CircularProgress from "@material-ui/core/CircularProgress";

import {getBooking} from "../../actions/bookings";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const BookingForm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [bookings] = useSelector(state => [state.Booking.bookings], shallowEqual);

    let booking = bookings.find(item => item.ID.toString() === props.match.params.id);

    if (!booking.complete) {
        getBooking(booking.ID)(dispatch);

        return (
            <div className={classes.paper}>
                <CircularProgress className={classes.progress}/>
            </div>
        );
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                Booking {booking.CHECKIN}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Client
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="fname"
                        disabled
                        value={booking.complete.client.NAME}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                        disabled
                        value={booking.complete.client.SURNAME}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phone"
                        name="phone"
                        label="Phone"
                        fullWidth
                        disabled
                        value={booking.complete.client.PHONE}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="mail"
                        name="mail"
                        label="Mail"
                        fullWidth
                        disabled
                        value={booking.complete.client.MAIL}
                    />
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Typography variant="h6" gutterBottom>
                Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="checkin"
                        name="checkin"
                        fullWidth
                        label="checkin"
                        value={booking.CHECKIN}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="checkout"
                        name="checkout"
                        label="checkout"
                        fullWidth
                        value={booking.CHECKOUT}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="billing country"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default withRouter(BookingForm);