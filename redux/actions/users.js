import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getUsersStart = () => {
    return {
        type: actionTypes.GET_USER_DATA_START
    }
}

export const getUsersSuccess = (userData) => {
    return {
        type: actionTypes.GET_USER_DATA_SUCCESS,
        users: userData
    }
}

export const getUsers = () => {
    return dispatch => {
        axios.get('http://localhost:8010/api/v1/customerdata/')
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            });
    }
};