
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendedBreed } from "../types";

// Function to get dog breed recommendations based on user lifestyle using Gemini AI
export async function getPetMatchRecommendations(userInput: string): Promise<RecommendedBreed[] | null> {
  // Fix: Create the GoogleGenAI instance inside the function to ensure the most current API key is used
  // Fix: Use process.env.API_KEY directly as per the coding guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User lifestyle description: "${userInput}". Based on this, recommend 3 dog breeds. Respond ONLY in the requested JSON format.`,
      config: {
        systemInstruction: "You are a professional dog behaviorist and pet matching expert. Analyze user lifestyle (apartment/house, children, activity level, allergy concerns) and suggest breeds.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              breed: { type: Type.STRING, description: "Name of the breed" },
              reason: { type: Type.STRING, description: "Detailed explanation why this breed matches the user's lifestyle" },
              suitabilityScore: { type: Type.NUMBER, description: "Score from 0 to 100" }
            },
            required: ["breed", "reason", "suitabilityScore"]
          }
        }
      }
    });

    // Fix: Access .text as a property to retrieve the generated string
    const jsonStr = response.text || '[]';
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    return null;
  }
}
