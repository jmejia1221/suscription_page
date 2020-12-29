import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: false
};

const getUsersStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getUsersSuccess = (state, action) => {
    return {
        ...state,
        users: [...action.users],
        loading: false,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_DATA_START:
            return getUsersStart(state, action);
        case actionTypes.GET_USER_DATA_SUCCESS:
            return getUsersSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;