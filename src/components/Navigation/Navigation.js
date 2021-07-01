import React from "react";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Nav } from "./Navigation.styled";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Router>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </Nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
