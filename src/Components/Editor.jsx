import React from "react";
import { useState } from "react";

export default function Editor({ block, onUpdate }) {
  const [loading, setLoading] = useState(false);

  if (!block) {
    return (
      <div className="bg-white border rounded-xl p-6 text-gray-500 text-sm">
        Select a block to edit
      </div>
    );
  }

  // 🧠 Day 8: Fake AI Generator
  const generateAIText = async () => {
    setLoading(true);

    setTimeout(() => {
      const samples = [
        "Welcome to our newsletter! We’re excited to bring you meaningful updates and helpful insights.",
        "Here’s what’s new this week — fresh updates, useful tips, and features designed for you.",
        "Thanks for staying connected with us. Explore our latest news and product highlights.",
        "We’ve curated this update to help you stay informed, inspired, and ahead of the curve.",
        "Discover important updates and announcements crafted to add value to your day.",
        "Stay tuned for exciting features, improvements, and stories from our team.",
        "This edition brings you key updates and insights you don’t want to miss.",
        "We’re happy to share the latest developments and improvements with you.",
        "Catch up on what’s happening and see how we’re continuing to improve.",
        "Our latest update focuses on clarity, performance, and user experience.",
        "Explore new enhancements and tips designed to make your workflow easier.",
        "This message highlights recent changes and what they mean for you.",
        "We appreciate your support — here’s a quick look at what’s new.",
        "Find out how our latest updates can help you work smarter.",
        "We’re committed to bringing you relevant updates that truly matter.",
      ];

      const aiText = samples[Math.floor(Math.random() * samples.length)];

      onUpdate(aiText);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-white border rounded-xl p-6 space-y-4 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">Edit Block</h2>

      {/* TEXT BLOCK */}
      {block.type === "text" && (
        <>
          <textarea
            value={block.content}
            disabled={loading}
            onChange={(e) => onUpdate(e.target.value)}
            className={`w-full border rounded-lg p-3 text-sm resize-none min-h-[120px]
              ${loading ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            `}
          />

          {/* DAY 8 AI BUTTON */}
          <button
            onClick={generateAIText}
            disabled={loading}
            className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Generating with AI..." : "Generate with AI"}
          </button>
        </>
      )}

      {/* IMAGE BLOCK */}
      {block.type === "image" && (
        <input
          type="text"
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
          placeholder="Image URL"
        />
      )}

      {/* BUTTON BLOCK */}
      {block.type === "button" && (
        <input
          type="text"
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
          placeholder="Button text"
        />
      )}
    </div>
  );
}
