import React from "react";
import "./single.css";
import Topbar from "../../components/topbar/Topbar";
import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";

const Single = () => {
  return (
    <>
      <Topbar />
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
};

export default Single;
