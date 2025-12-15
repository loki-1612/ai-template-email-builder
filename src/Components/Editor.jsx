import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Editor({ block, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("welcome");

  if (!block) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 text-slate-500 text-sm shadow-sm">
        Select a block to edit
      </div>
    );
  }

  // ===== Day 12: AI samples by category =====
  const aiSamples = {
    welcome: [
      "Welcome to our community! We’re thrilled to have you here.",
      "Thanks for joining us! Let’s help you get started smoothly.",
    ],
    promotional: [
      "Flash Sale: Save 40% today only. Don’t miss out!",
      "New arrival alert! Explore our latest collection now.",
    ],
    transactional: [
      "Your order has been confirmed and is on its way.",
      "Password reset requested. Please follow the link to continue.",
    ],
    newsletter: [
      "This month’s highlights include new features and tips.",
      "Here’s a quick update on what’s new and improved.",
    ],
    event: [
      "You’re invited! Join us for an exclusive webinar.",
      "Save the date — our upcoming event is just around the corner.",
    ],
    reengagement: [
      "We miss you! Here’s something special to welcome you back.",
      "Your cart is waiting — complete your purchase today.",
    ],
    feedback: [
      "How did we do? Share your feedback with us.",
      "Got a minute? Tell us what you think and help us improve.",
    ],
    announcement: [
      "Big news! We’re launching something exciting.",
      "Important update regarding your account — read more inside.",
    ],
  };

  // ===== Day 12: AI generator =====
  const generateAIText = () => {
    setLoading(true);

    setTimeout(() => {
      const samples = aiSamples[category];
      const aiText = samples[Math.floor(Math.random() * samples.length)];
      onUpdate(aiText);
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-md"
    >
      <h2 className="text-lg font-semibold text-slate-800">Edit Block</h2>

      {/* TEXT BLOCK */}
      {block.type === "text" && (
        <>
          <textarea
            value={block.content}
            disabled={loading}
            onChange={(e) => onUpdate(e.target.value)}
            className={`w-full border rounded-lg p-3 text-sm resize-none min-h-[120px] transition
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              ${loading ? "bg-slate-100 cursor-not-allowed" : "bg-white"}
            `}
          />

          {/* ===== Day 12: Category selector ===== */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="welcome">Welcome</option>
            <option value="promotional">Promotional</option>
            <option value="transactional">Transactional</option>
            <option value="newsletter">Newsletter</option>
            <option value="event">Event</option>
            <option value="reengagement">Re-engagement</option>
            <option value="feedback">Feedback</option>
            <option value="announcement">Announcement</option>
          </select>

          {/* ===== AI BUTTON ===== */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            onClick={generateAIText}
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate with AI"}
          </motion.button>
        </>
      )}

      {/* IMAGE BLOCK */}
      {block.type === "image" && (
        <input
          type="text"
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Image URL"
        />
      )}

      {/* BUTTON BLOCK */}
      {block.type === "button" && (
        <input
          type="text"
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Button text"
        />
      )}
    </motion.div>
  );
}
