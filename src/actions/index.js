import axios from 'axios';
import * as TYPES from './types';
// import { getPathfromId } from '../../utils/index';

const ROOT_URL = 'http://www.arsofthotel.tk:4040';


export function getBookings() {

    return function(dispatch) {
        dispatch("HOLIII");
        // axios.get(`${ROOT_URL}/bookings`)
        // .then(request => {
        //     dispatch({
        //         type: TYPES.GET_BOOKINGS,
        //         payload: request
        //     });
        // }).catch((response) => {
        //     console.log(response);
        //     dispatch(`${response} in action getBookings`);
        // });
    };
}
