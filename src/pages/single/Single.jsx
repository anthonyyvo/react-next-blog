import React from "react";
import "./single.css";
import Topbar from "../../components/topbar/Topbar";
import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router";


const Single = () => {
const location = useLocation();

  return (
    <>
      <div className="single">
        <SinglePost location={location} />
        <Sidebar />
      </div>
    </>
  );
};

export default Single;
