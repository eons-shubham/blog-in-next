"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./Profile.module.css";
import { MyContext } from "@/app/profile/layout";

const page = () => {
  const { userName, setUserName, userBio, setUserBio } = useContext(MyContext);

  return (
    <div className={styles.overview}>
      <div className={styles.mainsection}>
        <div className={styles.imageArea}>
          <img src="avatar.png" alt="avatar" height={150} width={150} />
        </div>
        <div className={styles.personalDetails}>
          <p>{userName}</p>
          <p>{userBio}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
