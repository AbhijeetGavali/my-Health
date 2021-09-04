import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

export default function DashBoard() {
  return (
    <Switch>
      <div className="dashboard py-4">
        <Route exact path="/">
          <Redirect to="/DashBoard" />
        </Route>
        <Route path="/DashBoard">
          <Home />
        </Route>
        <Route path="/Post">
          <About />
        </Route>
        <Route path="/Event">
          <Setting />
        </Route>
        <Route path="/Setting">
          <Setting />
        </Route>
      </div>
    </Switch>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Setting() {
  return (
    <div>
      <h2>Setting</h2>
    </div>
  );
}
