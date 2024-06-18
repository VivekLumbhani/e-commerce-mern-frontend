import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from "./ActionType";

const initialState = {
    loading: false,
    user: null,
    error: null,
    jwt: localStorage.getItem("jwt") || null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, loading: true };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, loading: false, jwt: action.payload, error: null };
        case GET_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload, error: null };
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT:
            return { ...state, jwt: null, user: null, error: null };
        default:
            return state;
    }
};
