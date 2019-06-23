/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>Check In</TableCell>
                        <TableCell>Check Out</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell align="right">Import</TableCell>
                        <TableCell align="right">Debt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.bookings.map(row => (
                        <TableRow key={row.ID}>
                            <TableCell>{row.STATUS.toLowerCase()}</TableCell>
                            <TableCell>{new Date(row.CHECKIN).toUTCString()}</TableCell>
                            <TableCell>{new Date(row.CHECKOUT).toUTCString()}</TableCell>
                            <TableCell>{row.IDCLIENT}</TableCell>
                            <TableCell align="right">{row.IMPORT}</TableCell>
                            <TableCell align="right">{row.DEBT}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="javascript:;">
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
}