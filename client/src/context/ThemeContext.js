import React from 'react';

// injecting names for custom color CSS classes into the app using JSX and react Context
export const Themes = {
    light: {
        currentTheme: "Light",
        txtClr1: " textColor1",
        txtClr2: " textColor2",
        txtClr3: " textColor4",
        bkgrndClr1: " backgroundColor6",
        bkgrndClr2: " backgroundColor5",
        bkgrndClr3: " backgroundColor4",
        bkgrndClr4: " backgroundColor3",
        bkgrndClr5: " backgroundColor2",
        bkgrndClr6: " backgroundColor1",
    },
    dark: {
        currentTheme: "Dark",
        txtClr1: " textColor6",
        txtClr2: " textColor5",
        txtClr3: " textColor4",
        bkgrndClr1: " backgroundColor1",
        bkgrndClr2: " backgroundColor2",
        bkgrndClr3: " backgroundColor3",
        bkgrndClr4: " backgroundColor4",
        bkgrndClr5: " backgroundColor5",
        bkgrndClr6: " backgroundColor5",
    }
};

// used as a Context.provider in the router to pass state setState to change themes
export const ThemeContext = React.createContext();