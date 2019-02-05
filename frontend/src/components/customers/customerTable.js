import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustomers, deleteCustomer } from '../../actions';
import './customerTable.css';

class CustomerTable extends Component {
    state = {  }

    componentDidMount() {
        this.props.getAllCustomers();
    }

    render() { 
        return ( 
            <div className='customerTable table-responsive mt-5'>
                <h3>Customers</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email Address</th>
                            <th scope='col'>Phone Number</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Preferred Contact</th>
                            <th scope='col'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.customers.map((customer, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {customer.name}
                                    </td>
                                    <td>
                                        {customer.email}
                                    </td>
                                    <td>
                                        {customer.phone}
                                    </td>
                                    <td>
                                        {customer.age}
                                    </td>
                                    <td>
                                        {customer.detail.preferred_contact}
                                    </td>
                                    <td className="remove">
                                        <button 
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => this.props.removeCustomer(customer.customer_id)}
                                        >x</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    customers: state.customers
});

const mapPropsToDispatch = dispatch => ({
    getAllCustomers: () => (dispatch(getCustomers())),
    removeCustomer: id => (dispatch(deleteCustomer(id)))
})

export default connect(mapStateToProps, mapPropsToDispatch)(CustomerTable);