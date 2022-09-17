import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import Navbar from "../components/Navbar";

import resume from '../Resume.pdf'


function Resume() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={"container-fluid p-0 min-height" + theme.bkgrndClr1}>

      <Navbar />

      <div className="w-100 text-center py-5 border">
        <h1 className={"display-4" + theme.txtClr1}>Maximilian A. Lewis</h1>
        <p className={"" + theme.txtClr1}>Computer Science Undergraduate & Junior Fullstack Developer</p>
        <a href={resume} ><button class={"btn btn-outline-dark btn-lg btn-block" + theme.txtClr1}>Download PDF // OLD</button></a>
      </div>

      {/* need to write resume out or have it display the pdf */}

    </div>
  )
}

export default Resume