import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/layout/header/header';
import Login from './components/container/auth/login/login';
import Signup from './components/container/auth/signup/signup';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact>
      </Route>    
      </Switch>
      <Switch>
      <Route path="/login" component={Login} exact>
      </Route>
      </Switch>
      <Switch>
      <Route path="/signup" component={Signup} exact>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
