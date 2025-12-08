import React from "react";

export default function Editor({ block, onUpdate }) {
  // If no block is selected, show a helper message
  if (!block) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-4 text-slate-500">
        Select a block to edit
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-3">
      <h3 className="text-lg font-semibold text-slate-800">
        Edit {block.type} block
      </h3>

      {/* TEXT BLOCK */}
      {block.type === "text" && (
        <textarea
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Edit text content"
        />
      )}

      {/* IMAGE BLOCK */}
      {block.type === "image" && (
        <input
          type="text"
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter image URL"
        />
      )}

      {/* BUTTON BLOCK */}
      {block.type === "button" && (
        <input
          type="text"
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Edit button text"
        />
      )}
    </div>
  );
}
