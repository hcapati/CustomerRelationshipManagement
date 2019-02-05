import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeads, deleteLead } from '../../actions';
import './leadsTable.css';

class LeadsTable extends Component {
    state = {  }

    componentDidMount() {
        this.props.getAllLeads();
    }

    render() { 
        return ( 
            <div className='leadsTable table-responsive mt-5'>
                <h3>Leads</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Last Contact</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Customer</th>
                            <th scope='col'>Owner</th>
                            <th 
                                scope='col' 
                                className="remove-header"
                                >Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map((lead, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {lead.last_contact ? new Date(lead.last_contact.toString()).getMonth() + 1 + "/" + new Date(lead.last_contact.toString()).getDate() + "/" + new Date(lead.last_contact.toString()).getFullYear() : ""}
                                    </td>
                                    <td>
                                        {lead.prioritytype.priority_type}
                                    </td>
                                    <td>
                                        {lead.customer.name}
                                    </td>
                                    <td>
                                        {lead.employee.name}
                                    </td>
                                    <td className="remove-btn">
                                        <button 
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => this.props.removeLead(lead.lead_id)}
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
    leads: state.leads
});

const mapPropsToDispatch = dispatch => ({
    getAllLeads: () => (dispatch(getLeads())),
    removeLead: id => (dispatch(deleteLead(id)))
})

export default connect(mapStateToProps, mapPropsToDispatch)(LeadsTable);