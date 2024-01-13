"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Page.module.css";

const page = ({ params }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/getblogcontent?id=${params.slug}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.blogpost}>
      <p className={styles.blogtitle}>{data.title}</p>
      <p className={styles.blogcontent}>{data.content}</p>
    </div>
  );
};

export default page;
