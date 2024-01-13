import React from "react";
import styles from "./BlogCard.module.css";

const BlogCard = ({ title, content, imageURL }) => {
  if (content.length > 35) {
    content = content.substring(0, 35);
    content += "...";
  }
  return (
    <div className={styles.blogCard}>
      <img
        src={imageURL}
        alt=""
        style={{ borderRadius: "10px", width: "100%", height: "25vh" }}
      />
      <h2 style={{ textTransform: "uppercase" }}>{title}</h2>
      <p style={{ textTransform: "uppercase" }}>{content}</p>
    </div>
  );
};

export default BlogCard;
