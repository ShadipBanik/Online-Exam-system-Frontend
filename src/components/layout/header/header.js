import './header.css'
import React from "react";
import {

  Link
} from "react-router-dom";
const Header=()=>{
    return(
   <nav className="navbar navbar-expand-lg navbar-dark " style={{width:"100%"}}>
  <a className="navbar-brand" href="#">ONLINE EXAM SYSTEM</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-4">
      <li className="nav-item active">
      <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">COURSE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>
    <form className="form-inline my-2 my-lg-0">
       <Link className="btn btn-outline-light my-2 mr-2 my-sm-0" to="/login">SIGN IN</Link>
       <Link className="btn btn-outline-light my-2 mr-2 my-sm-0" to="/signup">SIGN UP</Link>
    </form>
  </div>
</nav>
    )
}

export default Header;