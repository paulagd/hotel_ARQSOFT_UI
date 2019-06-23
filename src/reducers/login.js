import {LOGIN_ERROR, LOGIN, LOGIN_TRY} from "../actions/types";

const initial_state = {
    // TODO remove true
    logged: false,
    checked: false,
    error: false
};

export default (state = initial_state, action = {type: null}) => {
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                logged: true,
                error: false
            };

        case LOGIN_ERROR:
            return {
                ...state,
                error: true
            };

        case LOGIN_TRY:
            return {
                ...state,
                checked: true
            };

        default:
            return state
    }
}
