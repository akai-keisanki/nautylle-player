import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { audioDirectory } from "@/lib/utils";

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } },
) {
  const { filename } = await params;
  const filePath = path.join(audioDirectory, filename);

  // 1. Check if file exists
  if (!fs.existsSync(filePath)) {
    return new NextResponse("File Not Found", { status: 404 });
  }

  // 2. Get file stats for headers
  const stats = fs.statSync(filePath);
  const data = fs.createReadStream(filePath);

  // 3. Return the stream with correct headers
  return new NextResponse(data as any, {
    headers: {
      "Content-Type": "audio/mpeg", // or 'audio/wav'
      "Transfer-Encoding": "chunked",
      "Content-Length": stats.size.toString(),
    },
  });
}
