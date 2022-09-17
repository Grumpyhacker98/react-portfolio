import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Navbar from "../components/Navbar";
import { ThemeContext } from '../context/ThemeContext';

function NoMatch({ location }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={"container-fluid height p-0" + theme.bkgrndClr2}>
            
            <Navbar />

            <div className="card p-3 m-2 jumbotron text-center">
                <div className="card-body">
                    <h5 className="card-title">Sorry, 404 <code>{location.pathname}</code> not found</h5>
                    <Link to={"/"}>Return to Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default NoMatch