import React from "react";
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./LandingPage";
import { ProtectedRoute } from "./protected.route";
import Dashboard from "./Dashboard";
import Post from "./main/Post";
import Event from "./main/Event";
import Setting from "./main/Setting";
import Register from "./auth/Register";
import Login from "./auth/login";

export default function DashBoardContainer() {
  return (
    <div className="card">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Post" component={Post} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/Event" component={Event} />
        <ProtectedRoute exact path="/Setting" component={Setting} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}
