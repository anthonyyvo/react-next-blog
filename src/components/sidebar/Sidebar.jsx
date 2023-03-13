import React, { useEffect, useState } from "react";
import "./sidebar.css";
import sidebarImg from "../../assets/images/women.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [cats, setCats] = useState([])
  useEffect(()=> {
    const getCat = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
      console.log(cats);

    } 
    getCat();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sidebarImg} alt="" className="sidebarImage" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          beatae id modi animi aliquam maxime aspernatur, quisquam hic nesciunt
          exercitationem suscipit eveniet dicta asperiores quos labore odio
          consequatur, vero esse.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
        { cats.map((cat) => (
          <li className="sidebarListItem">
          <Link to={`/?cat=${cat.name}`}>
          {cat.name}
          </Link>
          </li>
        ))}
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarIcons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
