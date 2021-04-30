import React from 'react'
import { withRouter } from 'react-router'
import Header from '../../../layout/header/header'
import ProfileSidebar, { profileSidebar } from './profile-layouts/profile-sidebar'
import './profile.css'

const Profile = () => {
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  const toggleSidebar = () => {

    if (!sidebarOpen) {
      console.log(sidebar)
      sidebarOpen = true;
    }
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3 col-md-2 col-sm-3" style={{padding:0}}>
            <ProfileSidebar />
          </div>
          <div className="col-md-10" style={{ background: '#f2f2f2'}}>
            <div className="row">

              <div className="main__container" style={{ width: '100%' }}>
                <nav className="navbar">
                  <div className="nav_icon">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                  <div className="navbar__left">
                    <a href="#">Subscribers</a>
                    <a href="#">Video Management</a>
                    <a className="active_link" href="#">Admin</a>
                  </div>
                  <div className="navbar__right">
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <img width="30" src="assets/avatar.svg" alt="" />
                    </a>
                  </div>
                </nav>
                <div className="main__title">
                  <img src="/assets/images/hello.svg" alt="" />
                  <div className="main__greeting">
                    <h1>Hello Codersbite</h1>
                    <p>Welcome to your admin dashboard</p>
                  </div>
                </div>


                <div className="col-md-12 col-sm-12" style={{ padding: 0 }}>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="card ">
                        <i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"
                        ></i>
                        <div className="card_inner">
                          <p className="text-primary-p">Number of Subscribers</p>
                          <span className="font-bold text-title">578</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <div className="card ">
                        <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
                        <div className="card_inner">
                          <p className="text-primary-p">Times of Watching</p>
                          <span className="font-bold text-title">2467</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="card">
                        <i
                          className="fa fa-video-camera fa-2x text-yellow"
                          aria-hidden="true"
                        ></i>
                        <div className="card_inner">
                          <p className="text-primary-p">Number of Videos</p>
                          <span className="font-bold text-title">340</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="card ">
                        <i
                          className="fa fa-thumbs-up fa-2x text-green"
                          aria-hidden="true"
                        ></i>
                        <div className="card_inner">
                          <p className="text-primary-p">Number of Likes</p>
                          <span className="font-bold text-title">645</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12" style={{ padding: 0, marginTop: '30px' }}>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="charts__left">
                        <div className="charts__left__title">
                          <div>
                            <h1>Daily Reports</h1>
                            <p>Cupertino, California, USA</p>
                          </div>
                          <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>
                        <div id="apex1"></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="charts__right">
                        <div className="charts__right__title">
                          <div>
                            <h1>Stats Reports</h1>
                            <p>Cupertino, California, USA</p>
                          </div>
                          <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>
                        <div className="charts__right__cards">
                          <div className="card1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                          </div>

                          <div className="card2">
                            <h1>Sales</h1>
                            <p>$124,200</p>
                          </div>

                          <div className="card3">
                            <h1>Users</h1>
                            <p>3900</p>
                          </div>

                          <div className="card4">
                            <h1>Orders</h1>
                            <p>1881</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default withRouter(Profile);