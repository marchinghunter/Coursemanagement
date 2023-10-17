import React from "react";
import { Link } from "react-router-dom";
import '../Pages/Home.css'

const User = ({User}) => {
  return (
    <>
      <div className="homecontainer">
        <div className="text">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        {!User&&<Link to="/signup">
            <button className="authbtn homesignup" >Sign Up</button>
          </Link>}
        
        </div>
        <img src="https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="security" className="homeicon"/>

      </div>
    </>
  );
};

export default User;
