"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Page.module.css";
import Chip from "../../component/chip/Chip";

const page = ({ params }) => {
  const [data, setData] = useState("");
  const [formattedDate, setFormattedDate] = useState();
  const [category, setCategory] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/getblogcontent?id=${params.slug}`
        );
        setData(response.data);
        const timestampStr = response.data.timestamp;
        const timestampDate = new Date(timestampStr);
        const options = { month: "long", day: "2-digit", year: "numeric" };
        setFormattedDate(timestampDate.toLocaleDateString("en-US", options));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.blogpost}>
      <p
        style={{
          fontFamily: "Arial",
          color: "#a9a9a9",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        Published {formattedDate}
      </p>
      <p className={styles.blogtitle}>{data.title}</p>
      <div>
        <Chip category={data.category} />
      </div>
      <img
        src={data.imageURL}
        alt="image"
        style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
      />
      <p className={styles.blogcontent}>{data.content}</p>
    </div>
  );
};

export default page;
