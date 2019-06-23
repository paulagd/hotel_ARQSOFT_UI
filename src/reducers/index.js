import { combineReducers } from 'redux';
import Booking from './reducer-booking';
import Login from './login';

const rootReducer = combineReducers({
    Booking,
    Login
  });

export default rootReducer;
