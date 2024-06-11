import { Prisma } from "@prisma/client";
import prismaClient from "../component/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const data = await prismaClient.donor.findMany()

    return NextResponse.json({message: 'success', data})

}