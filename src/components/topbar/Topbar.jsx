import "./topbar.css";
import React from "react";
import bsAn from "../../assets/images/bs-vo-hoai-minh-an.jpeg";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = true;
  return (
    <div className="topbar font-secondary">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-twitter"></i>
        <i class="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topBar-list font-sans">
          <li className="topBar-item">
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li className="topBar-item">
                <Link to="/write">Write</Link>
              </li>
              <li className="topBar-item">
                <Link to="/settings">Settings</Link>
              </li>
            </>
          ) : (
            <>
              <li className="topBar-item">
                <Link to="/login">Log In</Link>
              </li>
              <li className="topBar-item">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

          {user && (
            <li className="topBar-item">
              <Link to="/register">Log Out</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        <div>
          {user ? <img src={bsAn} alt="me" className="topBar-avatar" /> : ""}
        </div>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
