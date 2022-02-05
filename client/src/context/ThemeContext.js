import React from 'react';

// names for custom color CSS classes inside style.css
export const Themes = {
    light: {
        tColor1: " tColor1",
        tColor2: " ",
        bColor1: " bColor6",
        bColor2: " bColor5",
        bColor3: " bColor4",
        bColor4: " bColor3",
        bColor5: " bColor2",
        bColor6: " bColor1",
    },
    dark: {
        tColor1: " tColor6",
        tColor2: " ",
        bColor1: " bColor1",
        bColor2: " bColor2",
        bColor3: " bColor3",
        bColor4: " bColor4",
        bColor5: " bColor5",
        bColor6: " bColor5",
    }
};

// used as a Context.provider in the router to pass state setState to change themes
export const ThemeContext = React.createContext();