import React from "react";

export default function Preview({ blocks, onSelect, selectedBlockId }) {
  return (
    <div className="bg-slate-100 p-6 rounded-xl h-full">
      <div className="bg-white rounded-xl shadow border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Email Preview</h2>

        {blocks.length === 0 && (
          <div className="border border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-500 text-sm">
            Add blocks from the sidebar to start building your email
          </div>
        )}

        {blocks.map((block) => {
          const isSelected = block.id === selectedBlockId;

          // TEXT BLOCK
          if (block.type === "text") {
            return (
              <p
                key={block.id}
                onClick={() => onSelect(block.id)}
                className={`cursor-pointer p-2 rounded-md transition
                  ${
                    isSelected
                      ? "bg-blue-50 border border-blue-400"
                      : "hover:bg-slate-100"
                  }
                `}
              >
                {block.content}
              </p>
            );
          }

          // IMAGE BLOCK
          if (block.type === "image") {
            return (
              <div
                key={block.id}
                onClick={() => onSelect(block.id)}
                className={`cursor-pointer h-32 rounded-md flex items-center justify-center text-sm transition
                  ${
                    isSelected
                      ? "bg-blue-50 border border-blue-400"
                      : "bg-slate-200 hover:bg-slate-300"
                  }
                `}
              >
                Image Placeholder
              </div>
            );
          }

          // BUTTON BLOCK
          if (block.type === "button") {
            return (
              <button
                key={block.id}
                onClick={() => onSelect(block.id)}
                className={`px-4 py-2 rounded-md transition
                  ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }
                `}
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
