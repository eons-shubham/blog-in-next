// const express = require("express");
// const app = express();
// const port = 8080;
// const mongoose = require("mongoose");
// const uri =
//   "mongodb+srv://bbbbbb:bbbbbb@cluster0.v2atrlv.mongodb.net/?retryWrites=true&w=majority";

// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("connected to mongooes");
//   } catch (error) {
//     console.log(error);
//   }
// }

// connect();

// app.get("/hello", (req, res) => {
//   const currentHour = new Date().getHours();
//   const greeting = currentHour < 12 ? "Good morning" : "Hello";
//   res.send(`${greeting}, World!`);
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require("express");
const cors = require("cors");
const DataModel = require("./dataModel"); // Update with the correct path

const uri =
  "mongodb+srv://bbbbbb:bbbbbb@cluster0.v2atrlv.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 8080;

app.use(cors());

app.use(express.json());

app.post("/saveData", async (req, res) => {
  try {
    const { title, content } = req.body; // Assuming data is sent in the request body

    // Create a new instance of your Mongoose model
    const newDataInstance = new DataModel({ title, content });

    // Save the data to MongoDB
    await newDataInstance.save();

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getData", async (req, res) => {
  try {
    const allData = await DataModel.find();
    res.status(200).json(allData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
