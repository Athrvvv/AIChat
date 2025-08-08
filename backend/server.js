// server.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Utility to clean Gemini response text
const cleanGeminiText = (text) => {
  if (!text) return "No response received.";
  
  return text
    .trim()
    .replace(/\n{2,}/g, "\n")         // Collapse multiple newlines into one
    .replace(/[*_~`>#-]/g, "")        // Remove markdown syntax (*, _, ~, etc.)
    .replace(/\n/g, " ")              // Replace remaining newlines with space
    .replace(/\s+/g, " ");            // Collapse multiple spaces
};

app.post("/generate", async (req, res) => {
  try {
    const { userInput } = req.body;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: userInput }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const rawText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    const cleanedText = cleanGeminiText(rawText);

    res.json({ text: cleanedText }); // Send clean response only
  } catch (err) {
    console.error("❌ Gemini Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch from Gemini API" });
  }
});

app.listen(3001, () => console.log("🚀 Server running on port 3001"));
