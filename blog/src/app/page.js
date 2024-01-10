"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./component/blog-card/BlogCard";
import Navbar from "./component/navbar/Navbar";
import styles from "./page.module.css";
import axios from "axios";
import Footer from "./component/footer/Footer";

const Home = () => {
  const [blogData, setBlogData] = useState([]);

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

  return (
    <div>
      <div className={styles.blogBody}>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
