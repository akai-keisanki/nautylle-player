"use client";

import { FileNode } from "@/models/file-node";
import { useEffect, useState } from "react";
import { getFileStructure } from "@/app/actions";
import { usePlayerContext } from "@/context/player-context";

export default function Explorer() {
  const [files, setFiles] = useState<FileNode[]>([]);
  const { selectedFile, setSelectedFile } = usePlayerContext();

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
          className="tree-item"
          onClick={() => {
            setSelectedFile(node.path);
          }}
        >
          🎵 <span>{node.name}</span>
        </div>
      );

    if (node.type === "text")
      return (
        <div className="tree-item">
          📄 <span>{node.name}</span>
        </div>
      );

    if (node.type === "cover") return;

    if (node.children.some((x) => x.type == "cover")) {
      let albumInfo = node.name.split(" - ");

      return (
        <details open>
          <summary className="tree-album">
            <img
              className="tree-cover"
              src={`/musicfiles/${node.children.find((x) => x.type == "cover").path}`}
            />
            <div className="tree-album-div">
              <div className="tree-album-title">{albumInfo[1]}</div>
              <div className="tree-album-desc">
                {albumInfo[0]} | album | {albumInfo[2]}
              </div>
            </div>
          </summary>
          {node.children && renderTree(node.children)}
        </details>
      );
    } else
      return (
        <details open>
          <summary className="tree-disc">💿 {node.name}</summary>
          {node.children && renderTree(node.children)}
        </details>
      );
  }

  const renderTree = (nodes: FileNode[]) => (
    <ul className="selector-tree">
      {nodes.map((node) => (
        <li key={node.path} className="my-2">
          {renderNodeType(node)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="selector-tree">
      <h1 className="text-2xl font-bold mb-4">Audio Library Structure</h1>
      {renderTree(files)}
    </div>
  );
}
