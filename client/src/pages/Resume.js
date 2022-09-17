import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import Navbar from "../components/Navbar";

import resume from '../Resume.pdf'


function Resume() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={"container-fluid p-0 min-height" + theme.bkgrndClr2}>

      <Navbar />

      <div className="m-5">
        <div className={"text-center p-2 border-5 rounded" + theme.bkgrndClr1}>
          <h4 className={"display-4" + theme.txtClr1}>Maximilian A. Lewis</h4>
          <p className={"" + theme.txtClr1}>Computer Science Undergraduate & Junior Fullstack Developer</p>
          <a href={resume} ><button className={"btn btn-outline-dark btn-lg btn-block" + theme.txtClr1 + theme.bkgrndClr3}>Download PDF // OLD</button></a>
        </div>
      </div>


      {/* need to write resume out or have it display the pdf */}

    </div>
  )
}

export default Resume