import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./History";
import ProtectedRoutes from "./protectedRoute";
import Login from "../pages/login/Login";
import base from "../pages/base/base";
import About from "../pages/about/about";
export default function Routes({ location }) {
  return (
    <Router history={history} location={location}>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoutes exact path={["/", "/welcome"]} component={base} />
        <ProtectedRoutes path="/about" component={About} />
      </Switch>
    </Router>
  );
}
c;
