import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../../validationSchemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

interface CreateIssueRequest {
  title: string;
  description: string;
}

export const POST = async function (request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  const response: CreateIssueRequest = await request.json();
  const validation = issueSchema.safeParse(response);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: response.title,
      description: response.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
};
