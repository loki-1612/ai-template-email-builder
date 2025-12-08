import React from "react";

export default function Preview({ blocks, onSelect }) {
  return (
    <div className="flex-1 bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow border p-6 space-y-4">
        <h1 className="text-xl font-semibold text-gray-800">Email Preview</h1>

        {blocks.length === 0 && (
          <p className="text-gray-500 text-sm">Add blocks from the sidebar</p>
        )}

        {blocks.map((block) => {
          if (block.type === "text") {
            return (
              <p
                key={block.id}
                onClick={() => onSelect(block.id)}
                className="cursor-pointer text-gray-700 hover:bg-gray-100 p-2 rounded"
              >
                {block.content}
              </p>
            );
          }

          if (block.type === "image") {
            return (
              <div
                key={block.id}
                onClick={() => onSelect(block.id)}
                className="cursor-pointer h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm hover:ring-2 hover:ring-blue-400"
              >
                Image Placeholder
              </div>
            );
          }

          if (block.type === "button") {
            return (
              <button
                key={block.id}
                onClick={() => onSelect(block.id)}
                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {block.content}
              </button>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
