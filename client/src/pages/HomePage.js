import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ThemeBtn from '../components/ThemeBtn';

import { ThemeContext } from '../context/ThemeContext';

function HomePage() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={"container-fluid height m-0" + theme.bkgrndClr3}>

      <div className="text-center p-5">
        <h2 className={"text-bold " + theme.txtClr1}>Welcome!</h2>
        <ThemeBtn />
        <Link className={"nav-link" + theme.txtClr1} to={"/Resume"}>Resume</Link>
        <Link className={"nav-link" + theme.txtClr1} to={"/Personal"}>Personal</Link>
        <Link className={"nav-link" + theme.txtClr1} to={"/Portfolio"}>Portfolio</Link>
      </div>
    </div>
  )
}

export default HomePage;