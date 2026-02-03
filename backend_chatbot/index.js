import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const hfRes = await fetch(
     "https://router.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `You are a construction impact analysis assistant.
User: ${userMessage}
Assistant:`,
options: { wait_for_model: true },
        }),
      }
    );

    const data = await hfRes.json();
console.log("Hugging Face response:" , data); 
    res.json({
      reply: data[0]?.generated_text || "No response",
    });
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ reply: "AI server error" });
  }
});

app.listen(5000, () =>
  console.log("Backend running at http://localhost:5000")
);
