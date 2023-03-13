import React from "react";
import "./home.css";
import { Header } from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useEffect, useState} from "react";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const search =  location.search
  console.log(search)
  useEffect(() => {
    const fetchPosts =  async () => {
      const res = await axios.get("/posts" + search);
      console.log(res.data);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts={posts}/>
      </div>
    </>
  );
};

export default Home;
