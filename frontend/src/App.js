import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import CustomerForm from './components/customers/customerForm';
import LeadForm from './components/leads/leadsForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainPage">
        <Navbar/>
        <Switch>
            <Route exact path='/' render={() => <Dashboard />}/>
            <Route path='/customer' render={() => <CustomerForm />} />
            <Route path='/lead' render={() => <LeadForm />} />
        </Switch>
      </div>
    );
  }
}

export default App;