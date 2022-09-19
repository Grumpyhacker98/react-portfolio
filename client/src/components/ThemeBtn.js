import React, { useContext } from 'react'
import { ThemeContext, Themes } from '../context/ThemeContext';

function ThemeBtn() {
    const { theme, setTheme } = useContext(ThemeContext)

    function changeTheme(){
        if(theme.currentTheme === "Light") {
            setTheme(Themes.dark);
        } else {
            setTheme(Themes.light);
        }
    }

    return (
        <div className={"btn border rounded-pill p-1 " + theme.highlightBtn} onClick={e => changeTheme()}>
            <p className={"m-0 " + theme.txtClr4}>{theme.currentTheme === "Light" ? "Light" : "Dark"}</p>
        </div >
    );
}

export default ThemeBtn;