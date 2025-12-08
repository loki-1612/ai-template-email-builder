import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Preview from "./Components/Preview";
import Editor from "./Components/Editor";
import { generateEmailHTML } from "./utils/exportHtml";
import ExportHtmlModal from "./Components/ExportHtmlModal";

export default function App() {
  // ===== Day 2: Blocks data =====
  const [blocks, setBlocks] = useState([]);

  // ===== Day 6: Selected block =====
  const [selectedBlockId, setSelectedBlockId] = useState(null);

  // ===== Day 5: Export HTML =====
  const [showExport, setShowExport] = useState(false);
  const [html, setHtml] = useState("");

  // ===== Day 6: Find selected block =====
  const selectedBlock = blocks.find((block) => block.id === selectedBlockId);

  // ===== Day 6: Update block content =====
  const updateBlock = (value) => {
    if (!selectedBlockId) return;

    setBlocks((prev) =>
      prev.map((b) => (b.id === selectedBlockId ? { ...b, content: value } : b))
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          AI Email Template Builder
        </h1>

        <button
          onClick={() => {
            setHtml(generateEmailHTML(blocks));
            setShowExport(true);
          }}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
        >
          Export HTML
        </button>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3">
          <Sidebar onAdd={setBlocks} />
        </div>

        {/* Preview */}
        <div className="col-span-6">
          <Preview blocks={blocks} onSelect={setSelectedBlockId} />
        </div>

        {/* Editor */}
        <div className="col-span-3">
          <Editor block={selectedBlock} onUpdate={updateBlock} />
        </div>
      </div>

      {/* Export Modal */}
      {showExport && (
        <ExportHtmlModal html={html} onClose={() => setShowExport(false)} />
      )}
    </div>
  );
}
