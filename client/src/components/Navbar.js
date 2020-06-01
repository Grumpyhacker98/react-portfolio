import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
    const location = useLocation()
    const path = location.pathname

    const { theme } = useContext(ThemeContext)

    // render the navbar if its not index page, render the links for specific pages
    return (
        <>
            {path !== "/" &&
                <nav className={"navbar "+theme.fore}>
                    <ul className="nav">
                        {path === "/Resume"
                            ? <li className="nav-item">
                                <Link className="nav-link py-0 text-secondary" to={"/Resume"}><p className="tHeavy m-0">Resume</p></Link>
                            </li>
                            : <li className="nav-item">
                                <Link className="nav-link py-0 text-secondary" to={"/Resume"}><p className="tItalic m-0">Resume</p></Link>
                            </li>
                        }
                        {path === "/Personal"
                            ? <li className="nav-item">
                                <Link className="nav-link py-0 text-secondary" to={"/Personal"}><p className="tHeavy m-0">Personal</p></Link>
                            </li>
                            : <li className="nav-item">
                                <Link className="nav-link py-0 text-secondary" to={"/Personal"}><p className="tItalic m-0">Personal</p></Link>
                            </li>
                        }
                        {path === "/Portfolio"
                            ? <li className="nav-item">
                                <Link className="nav-link py-0 text-secondary" to={"/Portfolio"}><p className="tHeavy m-0">Portfolio</p></Link>
                            </li>
                            : <li className="nav-item">
                                <Link className="nav-link py-0 text-secondary" to={"/Portfolio"}><p className="tItalic m-0">Portfolio</p></Link>
                            </li>
                        }
                    </ul>
                    <div>
                        <ThemeBtn />
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar