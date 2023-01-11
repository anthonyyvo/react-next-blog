import React from "react";
import "./login.css";
import bg2 from "../../assets/images/bg-2.webp";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="login"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.9)), url(${bg2})`,
      }}
    >
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />

        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
