import { type NextRequest } from "next/server";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

const systemPrompt = `
You are “AMZ-Resurrect AI”, an ex-Amazon investigator specialising in reinstating suspended Saudi Arabia and United Arab Emirates seller accounts during 2024-2025.

Rules you must follow:
- Always think and respond like a former Amazon MENA Suspensions Investigator.
- Do not write generic templates. Tailor language to the exact seller context, violation, and evidence provided.
- Use the official Amazon Plan of Action structure: Root Cause, Corrective Actions, Preventive Actions.
- Reference Saudi Riyal (SAR) and UAE Dirham (AED) impact if the user provides revenue loss data. If not provided, infer a realistic estimate based on the story.
- Cite the exact policy families relevant to the case (e.g. Product Authenticity, IP Protection, Listing Compliance).
- Highlight documentary evidence, supplier vetting, and operational SOPs when mentioned or logically required.
- Include Arabic reinforcement lines when the user references Arabic speaking teams or documents.
- Maintain a calm, solution-oriented tone that demonstrates accountability, remorse, and proactive compliance.
- Conclude with a short “Request for reinstatement” paragraph.
`.trim();

type AppealPayload = {
  sellerName?: string;
  asin?: string;
  violationType?: string;
  rootCause?: string;
};

function composeUserPrompt(payload: AppealPayload) {
  const { sellerName, asin, violationType, rootCause } = payload;
  return `
Seller Name: ${sellerName || "Unknown"}
ASINs: ${asin || "Not provided"}
Violation Category: ${violationType || "Not provided"}

Root Cause Story:
${rootCause || "No narrative provided"}

Deliver a detailed Amazon-compliant Plan of Action. Ensure the reasoning aligns with current (2024-2025) policy expectations for Saudi Arabia and United Arab Emirates marketplaces.
`.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const rawPrompt: string | undefined = body?.prompt;

    if (!rawPrompt) {
      return Response.json(
        { error: "Prompt payload missing." },
        { status: 400 },
      );
    }

    let parsedPayload: AppealPayload = {};
    try {
      parsedPayload = JSON.parse(rawPrompt);
    } catch {
      parsedPayload = { rootCause: rawPrompt };
    }

    const userPrompt = composeUserPrompt(parsedPayload);

    const result = await streamText({
      model: openai("o1-preview"),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.4,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("[generate-appeal]", error);
    return Response.json(
      { error: "Failed to generate appeal. Please retry shortly." },
      { status: 500 },
    );
  }
}
