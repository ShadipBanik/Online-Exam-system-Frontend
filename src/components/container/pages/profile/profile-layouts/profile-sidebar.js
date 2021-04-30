import React from 'react'
import {
    Link,
    withRouter
} from "react-router-dom";
import {removeAuthneticate} from '../../../../../middleware/authcheck.js'
import './profile.layout.css'
export const profileSidebar = () => {
    return (
       
                    <div id="sidebar">
                        <div className="sidebar__title">
                            <div className="sidebar__img" style={{width:"100%"}}>
                                <img src="/assets/images/user.png" alt="logo" className="userLogo" />
                                <h1 style={{margin:"auto"}}>Shadip Banik</h1>
                            </div>
                            <i
                             
                                className="fa fa-times"
                                id="sidebarIcon"
                                aria-hidden="true"
                            ></i>
                        </div>

                        <div className="sidebar__menu">
                            <div className="sidebar__link active_menu_link">
                                <i className="fa fa-home"></i>
                                <a href="#">PROFILE</a>
                            </div>
                            <h2>MNG</h2>
                            <div className="sidebar__link">
                                <i className="fa fa-user-secret" aria-hidden="true"></i>
                                <a href="#">Admin Management</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-building-o"></i>
                                <a href="#">Company Management</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-wrench"></i>
                                <a href="#">Employee Management</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-archive"></i>
                                <a href="#">Warehouse</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-handshake-o"></i>
                                <a href="#">Contracts</a>
                            </div>
                            <h2>LEAVE</h2>
                            <div className="sidebar__link">
                                <i className="fa fa-question"></i>
                                <a href="#">Requests</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-sign-out"></i>
                                <a href="#">Leave Policy</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-calendar-check-o"></i>
                                <a href="#">Special Days</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-files-o"></i>
                                <a href="#">Apply for leave</a>
                            </div>
                            <h2>PAYROLL</h2>
                            <div className="sidebar__link">
                                <i className="fa fa-money"></i>
                                <a href="#">Payroll</a>
                            </div>
                            <div className="sidebar__link">
                                <i className="fa fa-briefcase"></i>
                                <a href="#">Paygrade</a>
                            </div>
                            <div className="sidebar__logout">
                                <i className="fa fa-power-off"></i>
                                <Link  onClick={()=>{removeAuthneticate()}} to="/login">Log out</Link>
                            </div>
                        </div>
                    </div>

    )
}

export default withRouter(profileSidebar);
