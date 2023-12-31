"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./CreateBlog.module.css";

const CreateBlog = () => {
  const [blogContent, setBlogContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    console.log("Blog Content:", blogContent);
    router.push("/");
  };

  return (
    <div>
      <h1>Create New Blog</h1>
      <textarea
        className={styles.blogInput}
        placeholder="Enter your blog content..."
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
      />
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateBlog;
