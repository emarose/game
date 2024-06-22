// utils/generateLore.js
import axios from "axios";

export const generateChatCompletion = async (content) => {
  const baseUrl = "https://api.groq.com/openai/v1";
  try {
    // Define the message to send
    const message = {
      role: "user",
      content: content,
    };

    // Make POST request to Groq's chat completions endpoint
    const response = await axios.post(
      `${baseUrl}/chat/completions`,
      {
        messages: [message],
        model: "llama3-8b-8192", // Replace with your desired model
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Log the response content
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating chat completion:", error.message);
  }
};

// Call the function to generate chat completion
generateChatCompletion();
