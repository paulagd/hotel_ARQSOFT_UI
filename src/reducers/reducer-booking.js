import * as TYPES from '../actions/types';

const INITIAL_STATE = { bookings: []};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case TYPES.GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload
      };

    case TYPES.GET_BOOKING:
      let bookings = state.bookings.map(item => {
        if (item.ID === action.id)
          item.complete = {
            hosts: action.payload.hosts,
            client: action.payload.client
          };

        return item;
      });

      return {
        ...state,
        bookings
      };

    default:
      return state;
  }
}
