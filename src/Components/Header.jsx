import React from "react";
import { NavLink } from "react-router-dom";
import "../Pages/Header.css";
import logo from "../assets/image.png";

const Header = ({ user }) => {
  return (
    <>
      <div className="headercontainer">
        <img src={logo} alt="logo" className="Securitydojologo" />
        {user && <h1 className="username">{user.username}</h1>}
        <ul className="nav navbar">
          <NavLink to="/" className="navitem">
            <li>Home</li>
          </NavLink>
          <NavLink to="/courses" className="navitem">
            <li>Courses</li>
          </NavLink>
          {user?.isAdmin && (
            <NavLink to="/admin" className="navitem">
              {" "}
              <li>Admin</li>
            </NavLink>
          )}
        </ul>
        {user && (
          <img
            src={user.photos}
            className="userimage"
            referrerPolicy="no-referrer"
          />
        )}
        {user ? (
          <a
            className="navitem loginnav"
            onClick={() => {
              window.open(
                `${import.meta.env.VITE_API_BASE_URL}/auth/logout`,
                "_self"
              );
            }}
          >
            Logout
          </a>
        ) : (
          <NavLink to="/login" className="navitem loginnav">
            Login
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Header;
