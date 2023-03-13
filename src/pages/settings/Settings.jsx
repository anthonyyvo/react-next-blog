import React, { useContext, useEffect } from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import sidebarImg from "../../assets/images/women.jpeg";
import { Context } from "../../context/Context";
import { useState } from "react";
import axios from "axios";
const Settings = () => {
  const {user, dispatch} = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const PF = "http://localhost:5000/images/" ;

  // const [updateMode, setUpdateMode] =useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
      profilePic: file
    };
    dispatch({type: "UPDATE_START"});
    if(file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file, fileName);
      data.append("name", fileName);
      updateUser.profilePic = fileName;
      console.log(data);
      try {
        await axios.post("/upload", data);

      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updateUser);
      window.location.reload();
      dispatch({type: "UPDATE_SUCCESS", payload: res.data});
      setUpdateSuccess(true);
      console.log(res.data)

    } catch (err) {
      dispatch({type: "UPDATE_FAILED"});

    }
  }
  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    console.log(user)
  }, [])
 
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsTitle">
          <span>Update Your Account</span>
          <span>Delete Your Account</span>
        </div>
        <form className="settingsForm" action="" onSubmit={(e) => {handleUpdate(e)}}>
          <img src={file ? URL.createObjectURL(file)  : (PF + user.profilePicture)} alt="" className="settingImage" />
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" onChange={(e) => {
            setFile(e.target.files[0])
          }}/>
          <label htmlFor="settingsUserName">Username</label>
          <input
            type="text"
            id="settingsUserName"
            placeholder="hoai an"
            className="settingsTextInput"
            value={username}
            onChange={e=>setUsername(e.target.value)}

          />

          <label htmlFor="settingsEmail">Email</label>
          <input
            type="email"
            id="settingsEmail"
            placeholder="hoaian@gmail.com"
            className="settingsTextInput"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />

          <label htmlFor="settingsPassword">Password</label>
          <input
            type="password"
            id="settingsPassword"
            placeholder=""
            className="settingsTextInput"
            onChange={e=>setPassword(e.target.value)}

          />
          <button type="submit" className="settingButton">
            Update
          </button>
        </form>
        {
          updateSuccess && (
            <span>Update successful</span>
          )
        }
      </div>
      <Sidebar />
    </div>
  );
};
export default Settings;
