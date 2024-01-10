import React from "react";
import styles from "./BlogCard.module.css";

const BlogCard = ({ title, content }) => {
  return (
    <div className={styles.blogCard}>
      <img src="mockImage.jpg" alt="" width={385} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogCard;
