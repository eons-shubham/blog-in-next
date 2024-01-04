"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Profile.module.css";

const page = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (localStorage.getItem("name") === null)
      localStorage.setItem("name", "Yami Sukihero");
    if (localStorage.getItem("bio") === null)
      localStorage.setItem("bio", "Captain of magic knight squard Black Bull");

    setName(localStorage.getItem("name"));
    setBio(localStorage.getItem("bio"));
  }, []);

  const [showName, setShowName] = useState(0);
  const [showBio, setShowBio] = useState(0);
  const [textVar, setTextVar] = useState("");

  const handleClick = (val) => {
    if (val === 5) {
      if (showName) {
        setName(textVar);
        localStorage.setItem("name", `${textVar}`);
        setTextVar("");
      }
      setShowName((prev) => !prev);
      setShowBio(0);
      console.log(showName, showBio);
    } else {
      if (showBio) {
        setBio(textVar);
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
    <div className={styles.overview}>
      <div className={styles.sidebar}>
        <button onClick={() => handleClick(5)}>Change Name</button>
        <button onClick={() => handleClick(10)}>Change Bio</button>
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
      <div className={styles.mainsection}>
        <div className={styles.imageArea}>
          <img src="avatar.png" alt="avatar" height={150} width={150} />
        </div>
        <div className={styles.personalDetails}>
          <p>{name}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
