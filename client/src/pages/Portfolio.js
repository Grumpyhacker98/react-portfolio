import React, { useContext } from 'react';

import PortfolioDisplay from "../components/PortfolioDisplay"
import Navbar from "../components/Navbar";

import portfolio from "../GitList"
import { ThemeContext } from '../context/ThemeContext';

function Portfolio() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={"container-fluid min-height p-0" + theme.bkgrndClr2}>

            <Navbar />

            <div className="row m-0 p-2">
                {portfolio.map((project, i) => (
                    <div className="col-md-6 col-xl-4 p-2" key={i}>
                        <PortfolioDisplay {...project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio