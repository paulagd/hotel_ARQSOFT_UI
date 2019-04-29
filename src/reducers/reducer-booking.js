import * as TYPES from '../actions/types';

const INITIAL_STATE = { bookings: []};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case TYPES.GET_BOOKINGS:

      return {
        ...state,
        bookings: action.payload
      };

    default:
      return state;
  }
}
