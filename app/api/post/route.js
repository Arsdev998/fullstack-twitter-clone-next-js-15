import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { caption, imgUrl, userId } = body;
  try {
    const post = await prisma.post.create({
      data: {
        caption,
        imgUrl,
        userId,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const post = await prisma.post.findMany();
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
