import axios from "axios";
import * as TYPES from "./types";
import {ROOT_URL} from "./index";

export const getBookings = () => {

    return dispatch => {
        axios.get(`${ROOT_URL}/bookings`, {
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(request => {
            let payload = request.data.map(item => {
                return {
                    ...item,
                    complete: null
                }
            });

            dispatch({
                type: TYPES.GET_BOOKINGS,
                payload
            });
        }).catch((response) => {
            console.log(response);
        });
    };
};


export const getBooking = (id) => {

    return dispatch => {
        axios.get(`${ROOT_URL}/bookings/${id}`, {
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(request => {

            dispatch({
                type: TYPES.GET_BOOKING,
                payload: request.data,
                id
            });

        }).catch((response) => {
            console.log(response);
        });
    };
};