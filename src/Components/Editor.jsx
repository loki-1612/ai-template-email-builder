import React from "react";

export default function Editor({ block, onUpdate }) {
  if (!block) {
    return (
      <div className="bg-white rounded-xl shadow border border-slate-200 p-6 text-sm text-slate-500">
        Select a block from the preview to edit its content
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow border border-slate-200 p-6 space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">
        Edit {block.type} block
      </h2>

      {(block.type === "text" || block.type === "button") && (
        <>
          <label className="text-sm text-slate-600">
            Content
          </label>
          <input
            value={block.content}
            onChange={(e) => onUpdate(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
      )}

      {block.type === "image" && (
        <>
          <label className="text-sm text-slate-600">
            Image URL
          </label>
          <input
            value={block.content}
            onChange={(e) => onUpdate(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
      )}
    </div>
  );
}