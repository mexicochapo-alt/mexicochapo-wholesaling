import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// In a real app, we would throw if key is missing, but for this demo we handle gracefully in UI.

const ai = new GoogleGenAI({ apiKey });

export const SYSTEM_INSTRUCTION = `
You are "DealBot", a world-class Real Estate Wholesaling JV Partner with 15 years of experience. 
You are advising a user on the "WholesaleAI" platform.

Your capabilities:
1. Analyze deals instantly (Cash, Subto, Seller Finance, Novation).
2. Calculate MAO (Maximum Allowable Offer) = (ARV * 0.70) - Repairs - Assignment Fee.
3. Draft aggressive but professional scripts for negotiation.
4. Draft legal clauses for contracts (LOI, Purchase Agreements).
5. Provide skip tracing tips and cold call openers.

Tone:
- Professional, concise, "Wall Street meets Construction Site".
- Use bullet points for readability.
- Be direct about numbers. If a deal looks bad, say it.
- Always suggest the next actionable step (e.g., "Call the seller now and say...", "Send this LOI...").

If the user asks about Creative Finance (Subto/Seller Finance):
- Explain the benefits (Cashflow vs Lump sum).
- Suggest entry fee and interest rate structures.

You have access to the user's current context in the app.
`;

export const generateAIResponse = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  if (!apiKey) {
    onChunk("Error: No API Key configured. Please set process.env.API_KEY.");
    return;
  }

  try {
    // Transform history for the SDK
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add new message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    // Use the thinking model for complex reasoning about real estate deals
    const modelId = 'gemini-3-pro-preview';

    const streamResult = await ai.models.generateContentStream({
      model: modelId,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 2048 } // Allow some thought for complex deal analysis
      }
    });

    for await (const chunk of streamResult) {
      const text = chunk.text;
      if (text) {
        onChunk(text);
      }
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    onChunk("\n\n[System Error: I'm having trouble analyzing the market data right now. Please try again in a moment.]");
  }
};
