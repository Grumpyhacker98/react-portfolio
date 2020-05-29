import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

function NoMatch({ location }) {
    return (
        <div className="card p-3 m-2 jumbotron">
            <div className="card-body">
                <h5 className="card-title">Sorry, 404 <code>{location.pathname}</code> not found</h5>
                <Link to={"/"}>Return to Homepage</Link>
            </div>
        </div>
    )
}

export default NoMatch