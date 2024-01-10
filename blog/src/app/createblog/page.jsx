"use client";
import React from "react";
import styles from "./Page.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const BlogForm = () => {
  const [newBlogInput, setNewBlowInput] = useState("");
  const [newTitleInput, setNewTitleInput] = useState("");
  const router = useRouter();

  const postDataToServer = async (newBlogEntry) => {
    const url = "http://localhost:8080/saveData";
    const { title, content } = newBlogEntry;
    let postData = { title, content };

    try {
      const response = await axios.post(url, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogEntry = {
      title: newTitleInput,
      content: newBlogInput,
    };
    if (newTitleInput.length > 0 && newBlogInput.length > 0)
      postDataToServer(newBlogEntry);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "20px", fontSize: "28px" }}
      >
        Create a New Blog Post
      </h2>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "5px" }}
          ></label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.titleinput}
            placeholder="Enter the title"
            value={newTitleInput}
            onChange={(e) => setNewTitleInput(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="content"
            style={{ display: "block", marginBottom: "5px" }}
          ></label>
          <textarea
            id="content"
            name="content"
            className={styles.bloginput}
            placeholder="Write your blog content here"
            value={newBlogInput}
            onChange={(e) => {
              setNewBlowInput(e.target.value);
            }}
          ></textarea>
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
