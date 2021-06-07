import React from 'react'
import {
    Link,
    withRouter
} from "react-router-dom";
import { removeAuthneticate } from '../../../../../middleware/authcheck.js'
import './profile.layout.css'
export const profileSidebar = ({sidebar,closeSidebar}) => {
    const users= localStorage.getItem('user');
    const pasrseUser=JSON.parse(users);
    return (

        <div id="sidebar" className={sidebar?'sidebar_responsive':''}>
            <div className="sidebar__title" style={{ width: "100%" }}>
                <div className="sidebar__img" style={{margin:'auto'}}>
                    <img src="/assets/images/user.png" alt="logo" className="userLogo" />
                    <h1 style={{ marginLeft: "15px" }}>{pasrseUser.username.charAt(0).toUpperCase() + pasrseUser.username.slice(1)}</h1>
                </div>
                <i onClick={closeSidebar}

                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                   <Link to="#">PROFILE</Link>
                </div>
                <h2>MNG</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                   <Link to="#">Admin Management</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                   <Link to="#">Company Management</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                   <Link to="#">Employee Management</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                   <Link to="#">Warehouse</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                   <Link to="#">Contracts</Link>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                   <Link to="#">Requests</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                   <Link to="#">Leave Policy</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                   <Link to="#">Special Days</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                   <Link to="#">Apply for leave</Link>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                   <Link to="#">Payroll</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                   <Link to="#">Paygrade</Link>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <Link onClick={() => { removeAuthneticate() }} to="/login">Log out</Link>
                </div>
            </div>
        </div>

    )
}

export default withRouter(profileSidebar);
