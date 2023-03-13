import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import "./login.css";
import bg2 from "../../assets/images/bg-2.webp";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {

const userRef= useRef();
const passwordRef= useRef();

  const {dispatch, isFetching} = useContext(Context);
  const handleSubmit = async (e) => {
    console.log(userRef, passwordRef)
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,

      });
      console.log(res)

      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE"})
    }

  }
  console.log(isFetching);
  useEffect(() => {

  }, [])
  return (
    <div
      className="login"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.9)), url(${bg2})`,
      }}
    >
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={(e)=> {handleSubmit(e)}}>
        <label>Username</label>
        <input 
          type="text" 
          placeholder="Enter your username..." 
          ref={userRef}  
        />
        <label>Password</label>
        <input 
        type="password" 
        placeholder="Enter your password..." 
        ref={passwordRef}

        />

        <button type="submit" className="loginButton" disabled={isFetching}>Login IN</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="registerLink">Register</Link>
      </button>
    </div>
  );
};

export default Login;
