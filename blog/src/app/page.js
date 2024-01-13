"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./component/blog-card/BlogCard";
import Navbar from "./component/navbar/Navbar";
import styles from "./page.module.css";
import axios from "axios";
import Footer from "./component/footer/Footer";
import Link from "next/link";

const Home = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getblogdata");
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
          <Link
            key={blog.id}
            href={`/blogcontent/${blog.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <BlogCard key={blog.id} title={blog.title} content={blog.content} imageURL={blog.imageURL}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
