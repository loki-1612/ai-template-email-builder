import React from "react";
import App from "../App";

export default function Sidebar({ onAdd }) {
  return (
    <div className="h-70 bg-slate-900 rounded-xl shadow-lg text-white p-4 space-y-4">
      <h2 className="text-lg font-semibold tracking-wide mb-4">Blocks</h2>

      <button
        onClick={() => onAdd((prev) => [
          ...prev,{
            id: Date.now(),
            type: "text",
            content: "This is a text block",
          },
        ])
      }
      className="w-full bg-slate-700 hover:bg-slate-600 rounded-md py-2"
      >
        ➕ Text
      </button>

      <button
        onClick={() => onAdd((prev) => [
          ...prev,{
            id: Date.now(),
            type: "image",
            content: "https://via.placeholder.com/600x200",
          },
        ])
      }
        className="w-full bg-slate-700 hover:bg-slate-600 rounded-md py-2"
      >
        🖼 Image
      </button>

      <button
        onClick={() => onAdd((prev) => [
          ...prev,{
            id: Date.now(),
            type: "button",
            content: "Click Me",
          },
        ])
      }
        className="w-full bg-slate-700 hover:bg-slate-600 rounded-md py-2"
      >
        🔘 Button
      </button>
    </div>
  );
}