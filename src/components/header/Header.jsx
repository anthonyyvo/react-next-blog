import React from "react";
import "./Header.css";
import headerImage from "../../assets/images/spring-nature.jpeg";
import Topbar from "../topbar/Topbar";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles font-special color-gray">
          <span className="headerSubTitle">React & Node JS</span>
          <span className="headerTitle">Blog</span>
        </div>
        <div className="headerImageContainer">
          <img src={headerImage} alt="spring-header" className="headerImage" />
        </div>
      </div>
    </>
  );
};
