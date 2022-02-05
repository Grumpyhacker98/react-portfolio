import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from '../components/ThemeBtn';
import { ThemeContext } from '../context/ThemeContext';

function HomePage() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={"height jumbotron m-0" + theme.bColor1}>
      <div className="text-center p-5">
        <h2 className={"text-bold" + theme.tColor1}>Welcome!</h2>
        <ThemeBtn />
        <Link className="nav-link" to={"/Resume"}>Resume</Link>
        <Link className="nav-link" to={"/Personal"}>Personal</Link>
        <Link className="nav-link" to={"/Portfolio"}>Portfolio</Link>
      </div>
    </div>
  )
}

export default HomePage