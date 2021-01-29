import * as actionTypes from './actionTypes';
import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const URL = isProd ?
    'https://suscription-page-ekpfxp4e6.vercel.app/api' :
    'http://localhost:3000/api';

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
                dispatch(getUsersSuccess(response.data.data));
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
                dispatch(getUserDetailSuccess(response.data.data[0]));
            })
            .catch(err => {
                console.log(err)
            });
    }
}