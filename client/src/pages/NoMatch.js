import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { gsap } from "gsap";

import Navbar from "../components/Navbar";
import { ThemeContext } from '../context/ThemeContext';

function NoMatch({ location }) {
    const { theme } = useContext(ThemeContext)
    const animateRef = useRef();

    const [active, setActive] = useState(true);

    useEffect(() => {
        gsap.from(animateRef.current, { y: '-200%', rotation: "+=360" });
    }, []);

    const remove = () => {
        gsap.to(animateRef.current, {
            opacity: 0,
            y: "-200%",
            onComplete: () => setActive(false)
        });
    };

    return (
        <div className={"container-fluid height p-0 " + theme.bkgrndClr2}>

            <Navbar />

            {/* <button onClick={e => remove()}>Click</button> */}

            {
                active ?

                    <div className={"m-5 p-3 text-center shadow border-5 rounded zIndexBottom " + theme.bkgrndClr1} ref={animateRef}>
                        <h5 className={theme.txtClr1}>Sorry, 404 error.</h5>
                        <h5 className={theme.txtClr1}><code>{location.pathname}</code> was not found</h5>
                        <Link to={"/"} className={"pt-2" + theme.txtClr3}>Return to Homepage</Link>
                    </div>

                    : null
            }
        </div>
    )
}

export default NoMatch