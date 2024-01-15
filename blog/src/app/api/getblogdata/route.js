import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const res = await prisma.Blog.findMany();
  return NextResponse.json(res);
}

