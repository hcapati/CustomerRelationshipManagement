import {
    GET_CUSTOMERS,
    GET_LEADS,
    ADD_CUSTOMER,
    ADD_LEAD,
    DELETE_CUSTOMER,
    DELETE_LEAD
} from './../constants';

const initialState = {
    customers: [],
    leads: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CUSTOMERS:
        return {
            ...state,
            customers: action.payload
        }
        case GET_LEADS:
        return {
            ...state,
            leads: action.payload
        }
        case ADD_CUSTOMER:
        return {
            ...state,
            customers: action.payload
        }
        case ADD_LEAD:
        return {
            ...state,
            leads: action.payload
        }
        case DELETE_CUSTOMER:
        return {
            ...state,
            customers: action.payload
        }
        case DELETE_LEAD:
        return {
            ...state,
            leads: action.payload
        }
        default:
        return state;
    }
}

export default rootReducer;