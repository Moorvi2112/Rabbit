const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateSummary(data) {
  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
You are a professional sales analyst.

Analyze the following sales dataset and create a short executive summary.

Dataset:
${JSON.stringify(data)}

Explain:
1. Total revenue trend
2. Best performing region
3. Best product category
4. Any anomalies like cancellations
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    return text;

  } catch (error) {

    console.error("Gemini API Error:", error);

    return "AI summary could not be generated.";
  }
}

module.exports = generateSummary;