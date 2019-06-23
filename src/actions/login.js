import axios from "axios";
import * as TYPES from "./types";
import crypto from "crypto";

import {ROOT_URL} from "./index";


export const singUp = (user) => {
    return dispatch => {
        let pass = crypto.createHash('md5').update(user.pass).digest("hex");

        axios.post(`${ROOT_URL}/login`, {
            type: 'password',
            email: user.email,
            password: pass
        }).then(response => {
            sessionStorage.setItem('token', response.data.token);
            if (user.remember)
                localStorage.setItem('token', response.data.refreshToken);
            dispatch({
                type: TYPES.LOGIN
            });
        }).catch(response => {
            console.log(response);
            dispatch({
                type: TYPES.LOGIN_ERROR
            });
        });
    }
};
export const checkToken = () => {
    return dispatch => {
        if (localStorage.getItem('token')) {
            axios.post(`${ROOT_URL}/login`, {
                type: 'refreshToken',
                refreshToken: localStorage.getItem('token')
            }).then(response => {
                sessionStorage.setItem('token', response.data.token);
                localStorage.setItem('token', response.data.refreshToken);
                dispatch({
                    type: TYPES.LOGIN
                });
            }).catch(response => {
                console.log(response);
                dispatch({
                    type: TYPES.LOGIN_TRY
                });
            });
        } else {
            dispatch({
                type: TYPES.LOGIN_TRY
            });
        }
    }
};