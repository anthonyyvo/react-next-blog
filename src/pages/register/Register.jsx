import React, { useState } from "react";
import "./register.css";
import bg2 from "../../assets/images/bg-2.webp";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username: username,
        email: email,
        password: password
      });
      res.data && window.location.replace("/login")

    } catch(err) {
      setError(true)
    }
    
  }

  return (
    <div
      className="register"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.9)), url(${bg2})`,
      }}
    >
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={
        (e) => {handleSubmit(e)}
      }>
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." onChange={
          (e) => {setUsername(e.target.value)}
        } />
        <label>Email</label>
        <input type="text" placeholder="Enter your email..." onChange={
          (e) => {setEmail(e.target.value)}
        }/>
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." onChange={
          (e) => {setPassword(e.target.value)}
        }/>

        <button type="" className="registerButton">Register</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/login">Login</Link>
      </button>
      <span className="errorMessage">
        {error && 'Something went wrong, try again'}

      </span>
    </div>
  );
};

export default Register;
