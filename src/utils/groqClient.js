// utils/groqClient.js
import axios from "axios";

const groqClient = axios.create({
  baseURL: "https://api.groq.com/openai/v1/chat/completions", // Replace with Groq API base URL
  headers: {
    Authorization: `Bearer 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`, // Use your Groq API key
    "Content-Type": "application/json",
  },
});

export const fetchGroqData = async (query) => {
  try {
    const response = await groqClient.post("/query", { query });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Groq:", error);
    throw error;
  }
};
