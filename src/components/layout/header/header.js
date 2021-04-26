import './header.css'
import React, { Fragment } from "react";
import { isAuthenticate, removeAuthneticate } from '../../../middleware/authcheck.js'
import {
  Link,
  withRouter
} from "react-router-dom";
const Header = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ width: "100%" }}>
      <Link className="navbar-brand" style={{ fontWeight: 900 }} to="#">ONLINE EXAM SYSTEM</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-4">
          <li className="nav-item active">
            <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">COURSE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">ABOUT</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
        </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a> */}
            </div>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          {!isAuthenticate() && (
            <Fragment>
              <Link className="btn btn-outline-light my-2 mr-2 my-sm-0" to="/login">SIGN IN</Link>
              <Link className="btn btn-outline-light my-2 mr-2 my-sm-0" to="/signup">SIGN UP</Link>
            </Fragment>
          )}
          {isAuthenticate() && (
            <Fragment>
              <Link className="btn btn-outline-light my-2 mr-2 my-sm-0" onClick={()=>{removeAuthneticate()}} to="/login">Log Out</Link>
            </Fragment>
          )}
        </form>
      </div>
    </nav>
  )
}

export default withRouter(Header);