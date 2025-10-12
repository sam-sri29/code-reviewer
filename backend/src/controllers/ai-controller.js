import { generateAIResponse } from "../services/ai.js";

export const getResponse = async (req, res) => {
  try {
    const prompt = req.body?.prompt || req.query?.prompt || req.params?.prompt;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const result = await generateAIResponse(prompt);
    res.json({ result });
  } catch (err) {
    console.error("AI Response Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

