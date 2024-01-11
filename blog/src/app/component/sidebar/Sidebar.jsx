"use client";
import React from "react";
import styles from "./Sidebar.module.css";
import { MyContext } from "../../profile/layout";
import { useState, useEffect, useContext } from "react";

const Sidebar = () => {
  const { userName, setUserName, userBio, setUserBio } = useContext(MyContext);

  useEffect(() => {
    if (localStorage.getItem("name") === null)
      localStorage.setItem("name", "Yami Sukihero");
    if (localStorage.getItem("bio") === null)
      localStorage.setItem("bio", "Captain of magic knight squard Black Bull");

    setUserName(localStorage.getItem("name"));
    setUserBio(localStorage.getItem("bio"));
  }, []);

  const [showName, setShowName] = useState(0);
  const [showBio, setShowBio] = useState(0);
  const [textVar, setTextVar] = useState("");

  const handleClick = (val) => {
    if (val === 5) {
      if (showName) {
        setUserName(textVar);
        localStorage.setItem("name", `${textVar}`);
        setTextVar("");
      }
      setShowName((prev) => !prev);
      setShowBio(0);
      console.log(showName, showBio);
    } else {
      if (showBio) {
        setUserBio(textVar);
        localStorage.setItem("bio", `${textVar}`);
        setTextVar("");
      }
      setShowName(0);
      setShowBio((prev) => !prev);
    }
  };

  const handleChange = (e) => {
    setTextVar(e.target.value);
  };
  return (
    <div className={styles.sidebar}>
      <button
        onClick={() => handleClick(5)}
        style={{ fontFamily: "Fira Code", fontSize: "15px" }}
      >
        Change Name
      </button>
      <button
        onClick={() => handleClick(10)}
        style={{ fontFamily: "Fira Code", fontSize: "15px" }}
      >
        Change Bio
      </button>
      <div className={styles.inputArea}>
        {showName && (
          <input
            type="text"
            placeholder="Enter New Name"
            onChange={handleChange}
            value={textVar}
          />
        )}
        {showBio && (
          <input
            type="text"
            placeholder="Enter Your Bio"
            onChange={handleChange}
            value={textVar}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
