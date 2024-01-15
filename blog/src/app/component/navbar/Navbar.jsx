import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/createblog">Create Blog</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
