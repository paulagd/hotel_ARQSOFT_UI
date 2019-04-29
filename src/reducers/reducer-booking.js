import * as TYPES from '../actions/types';

const INITIAL_STATE = { bookings: null};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case TYPES.GET_BOOKINGS:
      return Object.assign({}, state, {
        bookings: action.payload.data
      });

    default:
      return state;
  }
}
