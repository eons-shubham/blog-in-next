import React from "react";
import styles from "./BlogCard.module.css";
import Chip from "../chip/Chip";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({
  title,
  content,
  imageURL,
  category,
  author,
  timestamp,
}) => {
  if (content.length > 100) {
    content = content.substring(0, 95);
    content += "...";
  }
  if(title.length > 38){
    title = title.substring(0, 38);
    title += "...";
  }

  const timestampStr = timestamp;
  const timestampDate = new Date(timestampStr);
  const options = { month: "long", day: "2-digit", year: "numeric" };
  const formattedDate = timestampDate.toLocaleDateString("en-US", options);

  return (
    <div className={styles.blogCard}>
      <img
        src={imageURL}
        alt=""
        style={{ borderRadius: "10px", width: "100%", height: "31vh" }}
      />
      <Chip category={category} />
      <h2 style={{ textTransform: "uppercase" }}>{title}</h2>
      <p
        style={{
          textTransform: "capitalize",
          fontSize: "0.9rem",
          color: "#808080",
        }}
      >
        {content}
      </p>
      <div className={styles.footer}>
        <img
          src="author.jpg"
          alt="author"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "1rem",
          }}
        />
        <div className={styles.authorDetails}>
          <p>{author}</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
