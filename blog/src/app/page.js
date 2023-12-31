"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./component/blog-card/BlogCard";
import Navbar from "./component/navbar/Navbar";
import styles from "./page.module.css";
import axios from "axios";

const Home = () => {
  const [blogData, setBlogData] = useState([]);

  const [newBlogInput, setNewBlogInput] = useState("");
  const [showCreateBlogInput, setShowCreateBlogInput] = useState(false);

  const handleCreateBlog = () => {
    setShowCreateBlogInput(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getData");
        console.log(response.data);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const postDataToServer = async (newBlogEntry) => {
    const url = "http://localhost:8080/saveData";
    const { title, content } = newBlogEntry;
    let postData = { title, content };
    console.log(postData);

    try {
      const response = await axios.post(url, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleCreateBlogSubmit = () => {
    if (newBlogInput.length === 0) {
      setNewBlogInput("");
      setShowCreateBlogInput(false);
      return null;
    }

    const newBlogEntry = {
      id: blogData.length + 1,
      title: `Blog ${blogData.length + 1}`,
      content: newBlogInput,
    };

    postDataToServer(newBlogEntry);

    setBlogData((prevBlogData) => [...prevBlogData, newBlogEntry]);

    setNewBlogInput("");
    setShowCreateBlogInput(false);
  };

  return (
    <div>
      {!showCreateBlogInput && (
        <button onClick={handleCreateBlog} className={styles.createNewBlog}>
          Create New Blog
        </button>
      )}

      {showCreateBlogInput && (
        <div>
          <input
            type="text"
            value={newBlogInput}
            className={styles.textarea}
            onChange={(e) => setNewBlogInput(e.target.value)}
          />
          <button
            onClick={handleCreateBlogSubmit}
            className={styles.submitButton}
          >
            Submit
          </button>
        </div>
      )}

      <div>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
