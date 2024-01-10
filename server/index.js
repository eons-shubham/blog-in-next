const express = require("express");
const cors = require("cors");
const DataModel = require("./dataModel");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());

app.post("/saveData", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newData = await prisma.Blog.create({
      data: {
        title,
        content,
      },
      include: {},
    });
    res.json(newData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getData", async (req, res) => {
  try {
    const data = await prisma.Blog.findMany();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
