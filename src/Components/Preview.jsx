import React from "react";
import { motion } from "framer-motion";

export default function Preview({
  blocks,
  onSelect,
  selectedBlockId,
  dragIndex,
  setDragIndex,
  moveBlock,
}) {
  return (
    <div className="bg-slate-100 p-6 rounded-xl h-full">
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Email Preview</h2>

        {blocks.length === 0 && (
          <div className="border border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-500 text-sm">
            Add blocks from the sidebar to start building your email
          </div>
        )}
        
        {Array.isArray(blocks) && blocks.map((block, index) => {
          const isSelected = block.id === selectedBlockId;

          // ===== COMMON WRAPPER (UNCHANGED LOGIC) =====
          const wrapperProps = {
            draggable: true,
            onDragStart: () => setDragIndex(index),
            onDragOver: (e) => e.preventDefault(),
            onDrop: () => moveBlock(dragIndex, index),
            onClick: () => onSelect(block.id),
            onMouseDown: (e) => e.stopPropagation(),
            className: `cursor-grab active:cursor-grabbing transition-all rounded-lg border
              ${
                isSelected
                  ? "bg-blue-50 border-blue-400 shadow-sm"
                  : "border-slate-200 hover:bg-slate-50"
              }
            `,
          };

          // TEXT BLOCK
          if (block.type === "text") {
            return (
              <motion.p
                key={block.id}
                {...wrapperProps}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className={`${wrapperProps.className} p-3 text-slate-700`}
              >
                {block.content}
              </motion.p>
            );
          }

          // IMAGE BLOCK
          if (block.type === "image") {
            return (
              <motion.div
                key={block.id}
                {...wrapperProps}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className={`h-32 flex items-center justify-center text-sm rounded-lg border
                  ${
                    isSelected
                      ? "bg-blue-50 border-blue-400"
                      : "bg-slate-200 border-slate-300 hover:bg-slate-300"
                  }
                `}
              >
                Image Placeholder
              </motion.div>
            );
          }

          // BUTTON BLOCK
          if (block.type === "button") {
            return (
              <motion.button
                key={block.id}
                {...wrapperProps}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`px-4 py-2 rounded-lg font-medium shadow-sm
                  ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }
                `}
              >
                {block.content}
              </motion.button>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
