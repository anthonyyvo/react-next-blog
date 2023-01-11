import React from "react";
import "./post.css";
import img1 from "../../assets/images/2.jpg.webp";

const Post = () => {
  return (
    <div className="post">
      <img src={img1} alt="" className="postImage" />
      <div className="postInfo">
        <span className="postDate">10 - 12 - 2022</span>
        <span className="postTitle">My FIRST BLOG</span>

        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
        </div>
        <hr />
        <div className="postExcerpt">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa at
            doloremque esse in soluta nesciunt dolorem illum, odio cupiditate ab
            unde eum. Deleniti, odit architecto! Dicta eius culpa cupiditate?
            Beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Culpa at doloremque esse in soluta nesciunt dolorem illum, odio
            cupiditate ab unde eum. Deleniti, odit architecto! Dicta eius culpa
            cupiditate? Beatae.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Culpa at doloremque esse in soluta nesciunt
            dolorem illum, odio cupiditate ab unde eum. Deleniti, odit
            architecto! Dicta eius culpa cupiditate? Beatae.Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Culpa at doloremque esse in
            soluta nesciunt dolorem illum, odio cupiditate ab unde eum.
            Deleniti, odit architecto! Dicta eius culpa cupiditate? Beatae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
