import axios from 'axios';
import * as TYPES from './types';
// import { getPathfromId } from '../../utils/index';

// const ROOT_URL = 'https://api.arsofthotel.tk';
const ROOT_URL = 'http://localhost:4040';


export function getBookings() {

    // return function(dispatch) {
    //     axios.get(`${ROOT_URL}/bookings`).then(request => {
    //          dispatch({
    //              type: TYPES.GET_BOOKINGS,
    //              payload: request.data
    //          });
    //     }).catch((response) => {
    //          console.log(response);
    //          dispatch(`${response} in action getBookings`);
    //     });
    // };

    return function(dispatch) {
        axios.get(`${ROOT_URL}/bookings/1`).then(request => {
             dispatch({
                 type: TYPES.GET_BOOKINGS,
                 payload: request.data
             });
        }).catch((response) => {
             console.log(response);
             dispatch(`${response} in action getBookings`);
        });
    };
}
