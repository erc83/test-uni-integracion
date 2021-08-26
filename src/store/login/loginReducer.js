import { LOGIN_USER_ERROR, 
        LOGIN_USER_INIT, 
        LOGIN_USER_SUCCESS } from './constants'

const initialStore = {
    data: {},
    error: null,
    success: null,
    loading: false,
};

export const loginReducer = (prevState = initialStore, action) => {
    switch (action.type) {
        case LOGIN_USER_INIT:
            return{
                ...prevState,
                loading: true,
            };
        case LOGIN_USER_SUCCESS:
            return{
                ...prevState,
                loading: false,
                data: action.payload,
            };
        case LOGIN_USER_ERROR:
            return{
                ...prevState,
                error: action.payload,
                loading: false,
                data: {},
            };
        default:
            return prevState;
    }
}

export default loginReducer


