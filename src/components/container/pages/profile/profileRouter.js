import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Protected from "../../../../protected.js";
import { ProfileHome } from "./profile-pages/profile-home";



const ProfileRoutes = (toggleSidebar) => {
 
console.log(toggleSidebar)
  return (
    <Router>
      <Switch>
        <Protected path="/"  component={ProfileHome}  />
        {/* <Protected path="/profile" component={Profile}   /> */}
      </Switch>
    </Router>
  )
}

export default ProfileRoutes;