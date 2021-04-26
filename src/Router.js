import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/container/pages/home/home'
import Login from './components/container/auth/login/login';
import Signup from './components/container/auth/signup/signup';
import Protected from "./protected";
import Profile from "./components/container/pages/profile/profile";
import resetPassword from "./components/container/auth/resetPassword/resetPassword";

const Routes = () => {
 

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/activate/:token" component={Login} exact />
        <Route path="/resetPassword/:email" component={resetPassword} exact />
        <Protected path="/profile" component={Profile}   />
      </Switch>
    </Router>
  )
}

export default Routes;