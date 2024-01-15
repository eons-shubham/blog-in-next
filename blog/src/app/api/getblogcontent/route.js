import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    const blog = await prisma.Blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Internal Server Error" });
  }
}
