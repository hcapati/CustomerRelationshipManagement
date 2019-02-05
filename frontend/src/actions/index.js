import axios from 'axios';

import {
    GET_CUSTOMERS,
    ADD_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
    GET_LEADS,
    ADD_LEAD,
    DELETE_LEAD,
    UPDATE_LEAD,
} from '../constants';

export const getCustomers = () => async dispatch => {
    let response = await axios.get('http://localhost:5000/api/customers');
    dispatch({ type: GET_CUSTOMERS, payload: response.data })
}

export const getLeads = () => async dispatch => {
    let response = await axios.get('http://localhost:5000/api/leads');
    dispatch({ type: GET_LEADS, payload: response.data })
}

export const addCustomer = customer => async dispatch => {
    let response = await axios.post('http://localhost:5000/api/customers', customer);
    dispatch({ type: ADD_CUSTOMER, payload: response.data })
}

export const addLead = lead => async dispatch => {
    console.log(lead);
    let response = await axios.post('http://localhost:5000/api/leads', lead);
    dispatch({ type: ADD_LEAD, payload: response.data })
}

export const deleteCustomer = id => async dispatch => {
    let response = await axios.delete(`http://localhost:5000/api/customers/${id}`);
    dispatch({ type: DELETE_CUSTOMER, payload: response.data })
}

export const deleteLead = id => async dispatch => {
    let response = await axios.delete(`http://localhost:5000/api/leads/${id}`);
    dispatch({ type: DELETE_LEAD, payload: response.data })
}

export const updateCustomer = (id, customer) => async dispatch => {
    let response = await axios.put(`http://localhost:5000/api/customers/${id}`, customer);
    dispatch({ type: UPDATE_CUSTOMER, payload: response.data })
}

export const updateLead = (id, lead) => async dispatch => {
    let response = await axios.put(`http://localhost:5000/api/leads/${id}`, lead);
    dispatch({ type: UPDATE_LEAD, payload: response.data })
}