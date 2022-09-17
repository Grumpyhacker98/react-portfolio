import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Navbar from "../components/Navbar";
import { ThemeContext } from '../context/ThemeContext';

function NoMatch({ location }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={"container-fluid height p-0" + theme.bkgrndClr2}>
            
            <Navbar />

            <div className={"card p-3 m-2 mt-3 jumbotron text-center shadow-sm " + theme.bkgrndClr1}>
                <div className="card-body">
                    <h5 className={"card-title" + theme.txtClr1}>Sorry, 404 error. <code>{location.pathname}</code> was not found</h5>
                    <Link to={"/"} className={theme.txtClr3}>Return to Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default NoMatch