import React, { useContext, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { gsap } from "gsap";

import { ThemeContext } from '../context/ThemeContext';

import ThemeBtn from './ThemeBtn';

function Navbar() {
    const location = useLocation()
    const path = location.pathname

    const { theme } = useContext(ThemeContext)

    const animateRef = useRef()

    useEffect(() => {
        gsap.from(animateRef.current, { y: '100%', ease: 'elastic' });
    }, []);

    // render the navbar if its not index page, render the links for specific pages
    return (
        <>
            {path !== "/" &&
                <nav className={"navbar shadow-sm zIndexTop " + theme.bkgrndClr1} ref={animateRef}>
                    <ul className="nav">
                        <li className="nav-item">
                            {path === "/Resume"
                                ? <Link className={"nav-link py-0" + theme.txtClr1} to={"/Resume"}><p className="tHeavy m-0">Resume</p></Link>
                                : <Link className={"nav-link py-0" + theme.txtClr2} to={"/Resume"}><p className="tItalic m-0">Resume</p></Link>
                            }
                        </li>
                        <li className="nav-item">
                            {path === "/Personal"
                                ? <Link className={"nav-link py-0" + theme.txtClr1} to={"/Personal"}><p className="tHeavy m-0">Personal</p></Link>
                                : <Link className={"nav-link py-0" + theme.txtClr2} to={"/Personal"}><p className="tItalic m-0">Personal</p></Link>
                            }
                        </li>
                        <li className="nav-item">
                            {path === "/Portfolio"
                                ? <Link className={"nav-link py-0" + theme.txtClr1} to={"/Portfolio"}><p className="tHeavy m-0">Portfolio</p></Link>
                                : <Link className={"nav-link py-0" + theme.txtClr2} to={"/Portfolio"}><p className="tItalic m-0">Portfolio</p></Link>
                            }
                        </li>
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