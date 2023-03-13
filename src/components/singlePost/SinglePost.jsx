import React, { useContext, useState } from "react";
import "./singlePost.css";
import postImg from "../../assets/images/2.jpg.webp";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";


const SinglePost = ({location}) => {
  const PF = "http://localhost:5000/images/" ;
  const [post, setPost] = useState({})
  const postId = location.pathname.split('/')[2];
  const {user} = useContext(Context);
  const [title, setTitle] =useState("");
  const [desc, setDesc] =useState("");
  const [updateMode, setUpdateMode] =useState(false);


  



  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${postId}/`);
      console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    } 
    getPost();
  },[]);
  const handleDelete = async () => {
    try {
    const res =  await axios.delete(`/posts/${post._id}`, {
      data:
      {username: user.username}
    });
      console.log(res);
      window.location.replace("/");
    } catch (err) {

    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        
          username: user.username,
          title,
          desc
        
      })
      window.location.reload();
      setUpdateMode(false);
    } catch (err) {

    }
  }
 
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={PF + post.photo} alt="" className="singePostImage" />
        {
          updateMode ? (
            <input 
            className="inputTitle" 
            type="text" 
            value={title} 
            autoFocus
            onChange={(e)=> {setTitle(e.target.value)}}
            >
            </input>
          ) :
          (
            <h1 className="singlePostTitle">
          {title}
          { post.username === user?.username && (
          <div className="singlePostEdit">
            <i class="fa-solid fa-pen-to-square" onClick={()=>{setUpdateMode(true)}}></i>
            <i class="fa-solid fa-trash" onClick={e => handleDelete(e)}></i>
          </div> )}
        </h1>
          )
        }
        
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
          
            <b>AUTHOR:</b> <Link to={`/?username=${post.username}`}>
            {post.username}
            </Link>
          </span>
          <span className="singlePostDate">12-12-2022</span>
        </div>
        {
          updateMode ? (
            <input type="text" className="inputDesc" value={desc}
                        onChange={(e)=> {setDesc(e.target.value)}}
            ></input>
          ) : (
            <p className="singlePostContent">
          {desc}
        </p>
          )
        }
        {
          updateMode && (
        <button className="singlePostUpdateButton"
          onClick={()=>{handleUpdate()}}
        >
        Update
        </button>
          )
        }
        
        
      </div>
    </div>
  );
};

export default SinglePost;
