"use client";
import React from "react";
import { useState } from "react";
import styles from "./Profile.module.css";

const page = () => {
  const [name, setName] = useState("Harry");
  const [bio, setBio] = useState("understanding the norms of the world !!!");

  const [showName, setShowName] = useState(0);
  const [showBio, setShowBio] = useState(0);
  const [textVar, setTextVar] = useState("");

  const handleClick = (val) => {
    if (val === 5) {
      if (showName) {
        setName(textVar);
        setTextVar("");
      }
      setShowName((prev) => !prev);
      setShowBio(0);
      console.log(showName, showBio);
    } else {
      if (showBio) {
        setBio(textVar);
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
        <div>
          <img src="avatar.png" alt="" width={150} height={150} />
          <p>{name}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
