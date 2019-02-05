import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <h3>Customer Relationship Management</h3>
                <Link 
                    className = 'link float-right'
                    to='/lead'>New Lead
                </Link>
                <Link 
                    className = 'link float-right'
                    to='/customer'>New Customer
                </Link>
                <Link 
                    className = 'link float-right'
                    to='/'>Dashboard
                </Link>
            </nav>
        </div>
    );
}
 
export default Navbar;