import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Notes from "../pages/Notes";
import Summary from "../pages/Summary";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

const NavPage = () => {
    return (
        <React.Fragment>
        <section>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </section>
        </React.Fragment>
    );
}

export default NavPage;