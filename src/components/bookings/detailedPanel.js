import React, {useState} from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles, useTheme} from "@material-ui/core/styles";

import {getBooking} from "../../actions/bookings";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    progress: {
        margin: theme.spacing(2),
    },
}));

export default (props) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [state, setState] = useState({
        booking: false,
        err: false
    });

    console.log(props.ID);

    if (!state.booking) {
        getBooking(props.ID, (data, err) => {
            if (err)
                setState({...state, err: true});
            else
                setState({...state, booking: data});
        });

        return (
            <div className={classes.paper}>
                <CircularProgress className={classes.progress}/>
            </div>
        );
    } else if (state.err) {

        return (
            <div>Error</div>
        )
    }

    return (
        <div>
            {state.booking}
        </div>
    )
}