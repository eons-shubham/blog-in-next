import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const payload = await request.json();
    const { title, content, imageURL, category, author } = payload;
    const newData = await prisma.Blog.create({
      data: {
        title,
        content,
        imageURL,
        author,
        category,
      },
      include: {},
    });
    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error("Error posting data:", error);
    return NextResponse.json({ result: "failed" });
  }
}
