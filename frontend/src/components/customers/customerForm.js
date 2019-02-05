import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomer } from '../../actions';
import './customerForm.css';

class CustomerForm extends Component {
    state = { 
        name: "",
        email: "",
        age: "",
        details_id: null,
        phone: "",
    }

    submitCustomer = e => {
        e.preventDefault();
        const newCustomer = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            details_id: this.state.details_id,
            phone: this.state.phone
        }
        this.props.addCustomer(newCustomer);
    }

    render() { 
        return ( 
            <div>
                <h3 className="customer-form">Add New Customer</h3>
                <form>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })} 
                            placeholder="Name"/>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            placeholder="Email"/>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.age}
                            onChange={e => this.setState({ age: e.target.value })}
                            placeholder="Age"/>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.phone}
                            onChange={e => this.setState({ phone: e.target.value })} 
                            placeholder="Phone Number"/>
                        <select 
                            name="preferred-contact" 
                            className="form-control" 
                            id=""
                            onChange={e => this.setState({ details_id: e.target.value })}>
                            <option value="">Preferred Contact</option>
                            <option value="2">Phone</option>
                            <option value="1">Email</option>
                        </select>
                    </div>
                    <button 
                        className="btn btn-outline-dark"
                        onClick={e => this.submitCustomer(e)}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    addCustomer: customer => (dispatch(addCustomer(customer)))
});

export default connect(null, mapPropsToDispatch)(CustomerForm);