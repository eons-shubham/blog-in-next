"use client";
import React from "react";
import styles from "./Page.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const BlogForm = () => {
  const [newBlogInput, setNewBlowInput] = useState("");
  const [newTitleInput, setNewTitleInput] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const router = useRouter();

  const postDataToServer = async (newBlogEntry) => {
    const url = "/api/saveblogdata";
    const { title, content, imageURL } = newBlogEntry;
    let postData = { title, content, imageURL };

    try {
      const response = await axios.post(url, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("pushing complete");
      router.push("/");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let responseImageUrl;
    if (image.type == "image/jpeg" || image.type == "image/png") {
      try {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "blog-in-next");
        data.append("cloud-name", "dqohvcb0s");
        const url = `https://api.cloudinary.com/v1_1/dqohvcb0s/image/upload`;
        const res = await axios.post(url, data);
        setImageURL(res.data.url);
        responseImageUrl = res.data.url;
      } catch (error) {
        console.error("Error uploading file", error);
      }
    }

    const newBlogEntry = {
      title: newTitleInput,
      content: newBlogInput,
      imageURL: responseImageUrl,
    };
    if (newTitleInput.length > 0 && newBlogInput.length > 0) {
      console.log(newBlogEntry);
      postDataToServer(newBlogEntry);
    }
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
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </form>
    </div>
  );
};

export default BlogForm;
