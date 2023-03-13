import "./topbar.css";
import React, { useContext } from "react";
import bsAn from "../../assets/images/bs-vo-hoai-minh-an.jpeg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Topbar = () => {
  const PF = "http://localhost:5000/images/" ;

  const {user, dispatch} = useContext(Context);
  const handleLogOut = () => {
    dispatch({type: "LOG_OUT"});

  }
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
              <Link to="/register"
                onClick={() => {handleLogOut()}}
              >Log Out</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        <div>
        <p>{user?.username || 'no author'}</p>
        <Link to="/settings">
        {user && <img src={ PF + user.profilePicture} alt="me" className="topBar-avatar" />}
        </Link>
        </div>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
