import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import sidebarImg from "../../assets/images/women.jpeg";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsTitle">
          <span>Update Your Account</span>
          <span>Delete Your Account</span>
        </div>
        <form className="settingsForm" action="">
          <img src={sidebarImg} alt="" className="settingImage" />
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" />
          <label htmlFor="settingsUserName">Username</label>
          <input
            type="text"
            id="settingsUserName"
            placeholder="hoai an"
            className="settingsTextInput"
          />

          <label htmlFor="settingsEmail">Email</label>
          <input
            type="email"
            id="settingsEmail"
            placeholder="hoaian@gmail.com"
            className="settingsTextInput"
          />

          <label htmlFor="settingsPassword">Password</label>
          <input
            type="password"
            id="settingsPassword"
            placeholder=""
            className="settingsTextInput"
          />
          <button type="submit" className="settingButton">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
export default Settings;
