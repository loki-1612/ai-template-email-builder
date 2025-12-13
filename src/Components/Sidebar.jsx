import React from "react";
import { motion } from "framer-motion";

export default function Sidebar({ onAdd }) {
  return (
    <div className="h-full bg-slate-900 rounded-xl shadow-lg text-white p-5 space-y-5">
      <h2 className="text-lg font-semibold tracking-wide">Blocks</h2>

      {/* TEXT BLOCK */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15 }}
        onClick={() =>
          onAdd((prev) => [
            ...prev,
            {
              id: Date.now(),
              type: "text",
              content: "This is a text block",
            },
          ])
        }
        className="w-full bg-slate-700 hover:bg-slate-600 rounded-lg py-2.5 font-medium shadow-sm flex items-center justify-center gap-2"
      >
        ➕ Text
      </motion.button>

      {/* IMAGE BLOCK */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15 }}
        onClick={() =>
          onAdd((prev) => [
            ...prev,
            {
              id: Date.now(),
              type: "image",
              content: "https://via.placeholder.com/600x200",
            },
          ])
        }
        className="w-full bg-slate-700 hover:bg-slate-600 rounded-lg py-2.5 font-medium shadow-sm flex items-center justify-center gap-2"
      >
        🖼 Image
      </motion.button>

      {/* BUTTON BLOCK */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15 }}
        onClick={() =>
          onAdd((prev) => [
            ...prev,
            {
              id: Date.now(),
              type: "button",
              content: "Click Me",
            },
          ])
        }
        className="w-full bg-slate-700 hover:bg-slate-600 rounded-lg py-2.5 font-medium shadow-sm flex items-center justify-center gap-2"
      >
        🔘 Button
      </motion.button>
    </div>
  );
}
