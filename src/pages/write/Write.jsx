import React from "react";
import "./write.css";
import Topbar from "../../components/topbar/Topbar";

export const Write = () => {
  return (
    <>
      <div className="write">
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="file">
              <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeText writeInput"
              type="text"
              placeholder="Tell your story..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="writeSubmit">Submit</button>
        </form>
      </div>
    </>
  );
};
