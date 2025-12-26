"use server";

import { audioDirectory } from "@/lib/utils";
import { FileNode } from "@/models/file-node";
import fs from "fs";
import path from "path";

export async function getFileStructure(
  dir: string = audioDirectory,
  baseDir: string = "",
): Promise<FileNode[]> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  return Promise.all(
    files.map(async (file) => {
      const relativePath = path.join(baseDir, file.name);

      if (file.isDirectory()) {
        return {
          name: file.name,
          type: "folder",
          path: relativePath,
          children: await getFileStructure(
            path.join(dir, file.name),
            relativePath,
          ),
        };
      }

      if (file.name.endsWith(".mp3") || file.name.endsWith(".wav")) {
        return {
          name: file.name,
          type: "audio",
          path: relativePath,
        };
      }

      if (file.name.endsWith(".txt")) {
        return {
          name: file.name,
          type: "text",
          path: relativePath,
        };
      }

      return {
        name: file.name,
        type: "file",
        path: relativePath,
      };
    }),
  );
}
