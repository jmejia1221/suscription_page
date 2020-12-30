import * as actionTypes from './actionTypes';
import axios from 'axios';

// const URL = 'http://localhost:8010/api/v1';
const URL = 'https://suscription-page.vercel.app/api/customerdata';

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
        axios.get(URL + '/customerdata/')
            .then(response => {
                dispatch(getUsersSuccess(response.data.results));
            })
            .catch(err => {
                console.log(err)
            });
    }
};

// User Detail fetching

export const getUserDetailStart = () => {
    return {
        type: actionTypes.GET_USER_DETAIL_DATA_START
    }
}

export const getUserDetailSuccess = (userData) => {
    return {
        type: actionTypes.GET_USER_DETAIL_DATA_SUCCESS,
        userDetail: userData
    }
}

export const getUserDetail = (userId) => {
    return dispatch => {
        axios.get(`${URL}/customerdata/${userId}/`)
            .then(response => {
                dispatch(getUserDetailSuccess(response.data));
            })
            .catch(err => {
                console.log(err)
            });
    }
}