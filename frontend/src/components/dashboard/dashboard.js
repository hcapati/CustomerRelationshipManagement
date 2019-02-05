import React from 'react';
import CustomerTable from '../customers/customerTable';
import LeadsTable from '../leads/leadsTable';

const Dashboard = () => {
    return ( 
        <div className='mainPage'>
            <CustomerTable />
            <LeadsTable />
        </div>
    )
}
 
export default Dashboard;