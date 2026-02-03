// index.js - Backend for Chatbot using OpenAI
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// POST /chat endpoint
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    // Call OpenAI Chat API
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" if you have access
      messages: [
        {
          role: "system",
          content: "You are a construction impact analysis assistant."
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      temperature: 0.7,
      max_tokens: 200
    });

    // Extract reply
    const reply = response.choices[0].message.content;

    // Send back to frontend
    res.json({ reply });

  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ reply: "AI server error" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});

