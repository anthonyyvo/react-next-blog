import React from "react";
import "./register.css";
import bg2 from "../../assets/images/bg-2.webp";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div
      className="register"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.9)), url(${bg2})`,
      }}
    >
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />

        <button className="registerButton">Register</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Register;
