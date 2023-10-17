import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../Pages/Admin.css";
import Newcourse from "./Admintabs/Newcourse";

const Admin = () => {
  const handleSkillLevelChange = (e) => {
    setSelectedSkillLevel(e.target.value);
  };
  return (
    <>
      <div className="admincontainer">
        <div className="adminheader">
          <h1>Welcome to the Admin page</h1>
          <div className="adminheaderoptions">
            <ul className="nav navbar adminheaderlist">
              <NavLink to="newcourse" className="navitem">
                <li>New Course</li>
              </NavLink>
              <NavLink to="removecourse" className="navitem">
                <li>Remove Course</li>
              </NavLink>
              <NavLink to="courses" className="navitem">
                <li>User List</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
