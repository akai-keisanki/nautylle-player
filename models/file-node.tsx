export type FileNode = {
  name: string;
  type: "file" | "folder" | "audio" | "text";
  path: string; // Relative path for reference
  children?: FileNode[];
};
