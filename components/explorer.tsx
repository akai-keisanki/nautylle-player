"use client";

import { FileNode } from "@/models/file-node";
import { useEffect, useState } from "react";
import { getFileStructure } from "@/app/actions";

export default function Explorer() {
  const [files, setFiles] = useState<FileNode[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>();

  useEffect(() => {
    fetchFileTree();
  }, []);

  async function fetchFileTree() {
    const r = await getFileStructure();
    setFiles(r);
  }

  function renderNodeType(node: FileNode) {
    if (node.type === "audio")
      return (
        <div
          style={{ fontWeight: selectedFile === node.path ? 700 : 400 }}
          className="flex items-center gap-2 text-gray-700 cursor-pointer hover:underline"
          onClick={() => {
            setSelectedFile(node.path);
          }}
        >
          🎵 <span>{node.name}</span>
        </div>
      );

    if (node.type === "text")
      return (
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:underline">
          📄 <span>{node.name}</span>
        </div>
      );

    return (
      <details open>
        <summary className="font-bold cursor-pointer hover:text-blue-500">
          📁 {node.name}
        </summary>
        {node.children && renderTree(node.children)}
      </details>
    );
  }

  const renderTree = (nodes: FileNode[]) => (
    <ul className="pl-4 border-l border-gray-300">
      {nodes.map((node) => (
        <li key={node.path} className="my-2">
          {renderNodeType(node)}
        </li>
      ))}
    </ul>
  );

  const audioSrc = `/api/stream/${encodeURIComponent(selectedFile || "")}`;
  return (
    <div>
      <div className="p-8">
        {selectedFile && audioSrc && <audio src={audioSrc} controls></audio>}
        <h1 className="text-2xl font-bold mb-4">Audio Library Structure</h1>
        {renderTree(files)}
      </div>
    </div>
  );
}
