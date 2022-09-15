import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Personal from "./pages/Personal";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";

import "./style.css"
import { ThemeContext, Themes } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(Themes.light)

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={"height" + theme.bkgrndClr2}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/Personal" component={Personal} />
            <Route exact path="/Portfolio" component={Portfolio} />
            {/* 404 redirect */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;