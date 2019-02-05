import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLead } from '../../actions';
import './leadsForm.css';

class LeadForm extends Component {
    state = { 
        last_contact: "",
        status_id: "",
        priority_id: "",
        customer_id: "",
        owner_id: ""
    }

    onSubmit = e => {
        e.preventDefault();

        const newLead = {
            last_contact: this.state.last_contact,
            status_id: this.state.status_id,
            priority_id: this.state.priority_id,
            customer_id: this.state.customer_id,
            owner_id: this.state.owner_id
        }

        this.props.addLead(newLead);
    }

    render() { 
        return (
            <div>
                <h3 className="lead-form">Add New Lead</h3>
                <form>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.last_contact}
                            onChange={e => this.setState({ last_contact: e.target.value })}
                            placeholder="Last Contact Date"/>
                        <select 
                            name="status" 
                            id="status"
                            className="form-control"
                            value={this.state.status_id}
                            onChange={e => this.setState({ status_id: e.target.value })}>
                            <option value="">Select Status</option>
                            <option value="1">Open</option>
                            <option value="2">Attempting Contact</option>
                            <option value="3">Converted/Qualified</option>
                            <option value="4">Disqualified</option>
                            <option value="5">Not Engaged</option>
                            <option value="6">Working</option>
                            <option value="7">Converted With No Oportunity</option>
                        </select>
                        <select 
                            name="priority" 
                            id="priority"
                            className="form-control"
                            value={this.state.priority_id}
                            onChange={e => this.setState({ priority_id: e.target.value })}>
                            <option value="">Select Priority</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                        <select 
                            name="customer" 
                            id="customer"
                            className="form-control"
                            value={this.state.customer_id}
                            onChange={e => this.setState({ customer_id: e.target.value })}>
                            <option value="">Select Customer</option>
                            {this.props.customers.map((c, index) => {
                                return(
                                    <option 
                                        key={index} 
                                        value={c.customer_id}
                                        >{c.name}</option>
                                )
                            })}
                        </select>
                        <select 
                            name="owner" 
                            id="owner"
                            className="form-control"
                            value={this.state.owner_id}
                            onChange={e => this.setState({ owner_id: e.target.value })}>
                            <option value="">Select Owner</option>
                            {this.props.leads.map((l, index) => {
                                return(
                                    <option
                                        key={index} 
                                        value={l.employee.employee_id}>{l.employee.name}
                                        </option>
                                )
                            })}
                        </select>
                        <button 
                            className="btn btn-outline-dark mt-3"
                            onClick={e => this.onSubmit(e)}
                            >Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers,
    leads: state.leads
});
 
const mapPropsToDispatch = dispatch => ({
    addLead: lead => dispatch(addLead(lead))
})

export default connect(mapStateToProps, mapPropsToDispatch)(LeadForm);