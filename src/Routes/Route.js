import React from "react";
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './History';
import Login from '../pages/login/Login';
import Welcome from '../pages/welcome/Welcome';
export default function Routes({location}) {
 
        return (
            <Router history={history} location={location}>
                <Switch>
                    <Route    path="/login" component={Login}/>
                    <Route exact path={["/", "/welcome"]} component={Welcome}/>
                </Switch>
            </Router>
        )
    
}