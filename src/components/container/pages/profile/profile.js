import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../../../layout/header/header'
import ProfileSidebar from './profile-layouts/profile-sidebar'
import './profile.css'
import ProfileRoutes from './profileRouter.js'
const Profile = () => {
  const [sidebar,setSidebar]=useState(false)
  const toggleSidebar = () => {
    if (!sidebar) {
      setSidebar(true)
    }
  }
  const closeSidebar = () => {
  
    if (sidebar) {
      setSidebar(false)
    }
  }
  return (
    <div>
      <Header props="profile" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3 col-md-2 col-sm-3" style={{padding:0}}>
            <ProfileSidebar sidebar={sidebar} closeSidebar={closeSidebar} />
          </div>
          <div className="col-md-10" style={{ background: '#f2f2f2',height:"100vh",overflowY:'auto'}}>
            <div className="row">
            <div className="main__container" style={{ width: '100%' }}>
                <nav className="navbar">
                  <div className="nav_icon" onClick={toggleSidebar}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                  <div className="navbar__left">
                    <Link to="#">Subscribers</Link>
                    <Link to="#">Video Management</Link>
                    <Link className="active_link" to="#">Admin</Link>
                  </div>
                  <div className="navbar__right">
                    <Link to="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </Link>
                 
                  </div>
                </nav>
                 <ProfileRoutes/>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default withRouter(Profile);