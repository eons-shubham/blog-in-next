import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const res = await prisma.Blog.findMany();
  return NextResponse.json(res);
}


// export async function POST(request) {
//   const payload = await request.json();
//   console.log(payload);

//   const url = "http://localhost:8080/saveData";
//   let postData = payload;

//   try {
//     const response = await axios.post(url, postData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return NextResponse.json({ result: "success" });
//   } catch (error) {
//     console.error("Error posting data:", error);
//     return NextResponse.json({ result: "failed" });
//   }
// }
