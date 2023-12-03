import React from "react";
import { SidebarData } from '../data/Data';
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <React.Fragment>
            <section>
                <div className="sidebar close">
                    <div className="sidebar-header">
                        <h2 className="brand">
                            <span>StudyMate</span>
                        </h2>
                        <i className="bi bi-justify"></i>
                    </div>

                    <div className="sidebar-menu">
                        <ul>
                            {
                                SidebarData.map((item, index)=>{
                                    return(
                                        <li key={index}>
                                            <NavLink to={item.path} className='hhhh'>
                                                <i className={item.icon}></i>
                                                <span>{item.title}</span>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <NavLink to="/login" className='logout'>
                                    <i class="bi bi-box-arrow-left"></i>
                                    <span>Logout</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Sidebar