
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openrouter = createOpenRouter({
    apiKey: import.meta.env.OPENROUTER_KEY
});
console.log(import.meta.env.OPENROUTER_KEY);