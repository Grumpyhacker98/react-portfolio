import React, { useContext } from 'react'
import { ThemeContext, Themes } from '../context/ThemeContext';

function ThemeBtn() {
    const { theme, setTheme } = useContext(ThemeContext)

    function setThemes(obj) {
        setTheme(obj)
        console.log(obj.currentTheme)
    }

    return (
        <div>
            <input type="radio" value="Male" name="gender" defaultChecked onChange={e => setThemes(Themes.light)} />
            <p className={theme.txtClr1}>{theme.currentTheme === "Light" ? "Light" : "Dark"}</p>
            <input type="radio" value="Female" name="gender" onChange={e => setThemes(Themes.dark)} />
        </div >
    );
}

export default ThemeBtn;