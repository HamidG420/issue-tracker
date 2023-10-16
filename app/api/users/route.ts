import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async function (request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(users);
};
