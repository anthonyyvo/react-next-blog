import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/2.jpg.webp";


const Post = ({post}) => {
const PF = "http://localhost:5000/images/" ;
  return (
    <div className="post">
      <img src={PF + post.photo} alt="" className="postImage" />
      <div className="postInfo">
        <span className="postDate">10 - 12 - 2022</span>
        <Link className="link" to={`/post/${post._id}`}>
        <span className="postTitle">
        {post.title}
        </span>
        </Link>
        <div className="postCats">
          {post.cat ? post.cat.map((c) => (
            <span className="postCat">Music</span> 

          )) : ''}
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
        </div>
        <hr />
        <div className="postExcerpt">
          <p>
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
