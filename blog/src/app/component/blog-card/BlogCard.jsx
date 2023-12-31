import React from "react";
import styles from "./BlogCard.module.css";

const BlogCard = ({ title, content }) => {
  return (
    <div className={styles.blogCard}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogCard;
