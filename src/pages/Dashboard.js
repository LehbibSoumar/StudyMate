import React from 'react';
import "./Page.css";
import { CourseData } from '../data/Data';
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <React.Fragment>
            <section>
                <div className="main-content">
                    <h2>Dashboard</h2>
                    <div className="search-add">
                        <div className="form-search">
                            <input type="text" placeholder="Search your courses" />
                            <i className="bi bi-search"></i>
                        </div>
                        <NavLink to='/add-course' className="add-btn"><i class="bi bi-plus-circle"></i></NavLink>
                    </div>
                    <div className="cours">
                    { CourseData.map((item, index) => {
                        return(
                            <div key={index}>
                                <NavLink to={item.path}>
                                    <h3>{item.title}</h3>
                                    <p>{item.icon}</p>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
                </div>
                
            </section>
        </React.Fragment>
    )
}

export default Dashboard