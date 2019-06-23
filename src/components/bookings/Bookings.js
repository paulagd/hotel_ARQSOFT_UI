import React from 'react';
import {withRouter} from 'react-router-dom';

import {Container} from "@material-ui/core/index";
import MaterialTable from 'material-table';
import iconInfo from '@material-ui/icons/Info'

import {useStyles} from "../dashboard/styles";
import tableIcons from '../utils/tableIcons';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

// import detailedPanel from './detailedPanel';
import {getBookings} from "../../actions/bookings";

const Bookings = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [bookings] = useSelector(state => [state.Booking.bookings], shallowEqual);

    React.useEffect(() => {
        getBookings()(dispatch);
    }, [dispatch]);

    const bookingsAdapt = bookings.map(booking => {
        return {
            ...booking,
            STATUS: booking.STATUS.toLowerCase(),
            CHECKIN: new Date(booking.CHECKIN),
            CHECKOUT: new Date(booking.CHECKOUT)
        }
    });

    return (
        <div>
            <Container maxWidth="xl" className={classes.container}>
                <MaterialTable
                    icons={tableIcons}
                    columns={[
                        {title: "Status", field: "STATUS"},
                        {title: "Check In", field: "CHECKIN", type: 'datetime'},
                        {title: "Check out", field: "CHECKOUT", type: "datetime"},
                        {title: 'Import', field: 'IMPORT', type: 'currency'},
                        {title: 'Debt', field: 'DEBT', type: 'currency'},
                        {title: 'Client', field: 'IDCLIENT'}
                    ]}
                    data={bookingsAdapt}
                    title="Bookings"
                    actions={[
                        {
                            icon: iconInfo,
                            tooltip: 'Info Booking',
                            onClick: (event, rawData) => props.history.push(`/booking/${rawData.ID}`)
                        }
                    ]}
                    // detailPanel={detailedPanel}
                />
            </Container>
        </div>
    );
};

export default withRouter(Bookings);