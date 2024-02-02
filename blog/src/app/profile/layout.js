"use client";

import styles from "./layout.module.css";
import Sidebar from "../component/sidebar/Sidebar";
import { useState, createContext } from "react";

export const MyContext = createContext();

export default function ProfileLayout({ children }) {
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");

  const contextValue = {
    userName,
    setUserName,
    userBio,
    setUserBio,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <section className={styles.mainBody}>
        <Sidebar />
        {children}
      </section>
    </MyContext.Provider>
  );
}
