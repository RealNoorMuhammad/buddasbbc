import React from "react";

import { Nave, Mint, Claim } from "./Componentss/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Fonts/go3v2.ttf";


import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Nave />

          <Switch>
            <Route exact path="/">
              <Mint />
            </Route>
            <Route exact path="/claim">
              <Claim />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
