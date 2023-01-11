import React from "react";
import "./singlePost.css";
import postImg from "../../assets/images/2.jpg.webp";

const singlePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={postImg} alt="" className="singePostImage" />
        <h1 className="singlePostTitle">
          My New Blog
          <div className="singlePostEdit">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <b>AUTHOR:</b> HOAI AN
          </span>
          <span className="singlePostDate">12-12-2022</span>
        </div>
        <p className="singlePostContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
          fuga maiores ea exercitationem explicabo, alias aliquid obcaecati quos
          non totam accusantium consectetur ipsa laboriosam facilis quasi
          excepturi? Corporis, magni? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum optio fuga maiores ea exercitationem
          explicabo, alias aliquid obcaecati quos non totam accusantium
          consectetur ipsa laboriosam facilis quasi excepturi? Corporis, magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
          fuga maiores ea exercitationem explicabo, alias aliquid obcaecati quos
          non totam accusantium consectetur ipsa laboriosam facilis quasi
          excepturi? Corporis, magni? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum optio fuga maiores ea exercitationem
          explicabo, alias aliquid obcaecati quos non totam accusantium
          consectetur ipsa laboriosam facilis quasi excepturi? Corporis, magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
          fuga maiores ea exercitationem explicabo, alias aliquid obcaecati quos
          non totam accusantium consectetur ipsa laboriosam facilis quasi
          excepturi? Corporis, magni? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum optio fuga maiores ea exercitationem
          explicabo, alias aliquid obcaecati quos non totam accusantium
          consectetur ipsa laboriosam facilis quasi excepturi? Corporis, magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
          fuga maiores ea exercitationem explicabo, alias aliquid obcaecati quos
          non totam accusantium consectetur ipsa laboriosam facilis quasi
          excepturi? Corporis, magni? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum optio fuga maiores ea exercitationem
          explicabo, alias aliquid obcaecati quos non totam accusantium
          consectetur ipsa laboriosam facilis quasi excepturi? Corporis, magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
          fuga maiores ea exercitationem explicabo, alias aliquid obcaecati quos
          non totam accusantium consectetur ipsa laboriosam facilis quasi
          excepturi? Corporis, magni? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum optio fuga maiores ea exercitationem
          explicabo, alias aliquid obcaecati quos non totam accusantium
          consectetur ipsa laboriosam facilis quasi excepturi? Corporis, magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
          fuga maiores ea exercitationem explicabo, alias aliquid obcaecati quos
          non totam accusantium consectetur ipsa laboriosam facilis quasi
          excepturi? Corporis, magni?
        </p>
      </div>
    </div>
  );
};

export default singlePost;
