import bcrypt from "bcrypt";
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password, name } = await req.json();

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
