import React, { useContext, useRef } from 'react'
import { ThemeContext, Themes } from '../context/ThemeContext';

function ThemeBtn() {
    const { setTheme } = useContext(ThemeContext)
    const input = useRef();

    return (
        <input type="range" min="0" max="1" ref={input}
            onChange={() => {
                switch (input.current.valueAsNumber) {
                    case 0:
                        setTheme(Themes.dark)
                        break;
                    case 1:
                        setTheme(Themes.light)
                        break;
                }
            }}
        />
    );
}

export default ThemeBtn;