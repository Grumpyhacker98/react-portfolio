import React, { useContext } from 'react';

import PortfolioDisplayProgress from './PortfolioDisplayProgress';

import { ThemeContext } from '../context/ThemeContext';

// grabs json object containing summary of git projects and displays them
function PortfolioDisplay(props) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={"text-center h-100"}>

            {/* project name and git */}
            <div className={"card-header d-flex justify-content-between align-items-center shadow-sm " + theme.bkgrndClr1}>
                <p className={"tHeavy m-0 p-0 " + theme.txtClr1}>{props.name}</p>

                <a href={props.git} className="" target="_blank" rel="noopener noreferrer">
                    <p className={"tBold m-0 " + theme.txtClr3}>Git</p></a>
            </div>

            {/* tech utilized */}
            <div className={"card-body p-2" + theme.bkgrndClr2}>
                <h6 className="text-muted d-flex justify-content-around my-2">
                    {props.lang.map((msg, i) => (
                        <p key={i} className={"m-0 tItalic " + theme.txtClr1}>{msg}</p>
                    ))}
                </h6>
                <p className={"card-text my-2" + theme.txtClr1}>{props.desc}</p>
            </div>

            {/* put updated time or a color indicator for how finished the project is */}
            <PortfolioDisplayProgress progress={props.progress} />

            {/* links, the second link renders conditionally*/}
            <div className={"card-footer d-flex justify-content-start " + theme.bkgrndClr1}>

                <div className="d-block">
                    <div className={"btn m-1 shadow" + theme.bkgrndClr3}>
                        <a href={props.link1} target="_blank" rel="noopener noreferrer" className={theme.txtClr1}>{props.link1Name}</a>
                    </div>

                    {props.link2 &&
                        <div className={"btn m-1 shadow" + theme.bkgrndClr3}>
                            <a href={props.link2} target="_blank" rel="noopener noreferrer" className={theme.txtClr1}>{props.link2Name}</a>
                        </div>
                    }
                </div>

                {/* <small class="text-muted">Last updated * mins ago</small> */}

            </div>
        </div >
    )
}

export default PortfolioDisplay