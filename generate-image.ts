import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A visually striking image related to technology, nanotechnology, and programming code. Surprising, impressive, highly detailed, futuristic.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const buffer = Buffer.from(base64EncodeString, 'base64');
        const outputPath = path.join(process.cwd(), 'public', 'tech-nano-code.png');
        fs.writeFileSync(outputPath, buffer);
        console.log('Image saved to', outputPath);
        break;
      }
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generate();
