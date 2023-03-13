import React, { useContext, useState } from "react";
import "./write.css";
import Topbar from "../../components/topbar/Topbar";
import { Context } from "../../context/Context";
import axios from "axios";
export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);
  const handleSubmit = async (e) => {
    console.log(user.username,
      title,
      desc,)

    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if(file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file, fileName);
      data.append("name", fileName);
      newPost.photo = fileName;
      console.log(data);
      try {
        await axios.post("/upload", data);

      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.post("/posts/", newPost);
      window.location.replace("/post/" + res.data._id)
      console.log(res)
    } catch (err) {}
    console.log(newPost)

  }
 
  return (

    <>
      <div className="write">
        {
          file && (
            <img className="writeImg" src={URL.createObjectURL(file)}  />
          )
        }
        <form className="writeForm" onSubmit={(e) => {handleSubmit(e)}}>
          <div className="writeFormGroup">
            <label htmlFor="file">
              <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="file" style={{ display: "none" }} onChange={(e) => {setFile(e.target.files[0]); console.log(file)}} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={e=>setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              onChange={(e) => {setDesc(e.target.value)}}
              className="writeText writeInput"
              type="text"
              placeholder="Tell your story..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" className="writeSubmit">Submit</button>
        </form>
      </div>
    </>
  );
};
