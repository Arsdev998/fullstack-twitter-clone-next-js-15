import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const config = {
  api: {
    bodyParser: false, // Mematikan bodyParser default Next.js
  },
};

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.id) {
    return NextResponse.json(
      { error: "Unauthorized, user session not found" },
      { status: 401 }
    );
  }
  const userId = session.user.id; // Ambil userId dari session
  try {
    // Handle multipart form-data
    const formData = await req.formData();
    console.log([...formData.entries()]);
    // Get values from form-data
    const file = formData.get("file");
    const caption = formData.get("caption");

    if (!file) {
      return NextResponse.json(
        { error: "Missing required " },
        { status: 400 }
      );
    }
    if (!caption) {
      return NextResponse.json(
        { error: "Missing required caption" },
        { status: 400 }
      );
    }

    // Convert File object to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate unique filename
    const filename = `twitter-clone/${Date.now()}-${userId}.${file.type}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from("twitter-clone")
      .upload(filename, buffer, {
        contentType: file.type,
      });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from("twitter-clone")
      .getPublicUrl(filename);

    if (!publicUrlData) {
      return NextResponse.json(
        { error: "Failed to retrieve public URL" },
        { status: 500 }
      );
    }

    const publicUrl = publicUrlData.publicUrl;

    // Save URL and additional data to Prisma
    const post = await prisma.post.create({
      data: {
        imgUrl: publicUrl,
        userId: userId,
        caption: caption,
      },
    });

    return NextResponse.json(
      { message: "Post created successfully", imageUrl: publicUrl, post: post },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const post = await prisma.post.findMany({
      take: 10,
      skip: 0,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        like: true,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
