import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const question = defineCollection({
  loader: glob({ base: "./src/content/question", pattern: "**/*.json" }),
  schema: z.object({
    questionNumber: z.number(),
    questionText: z.string(),
    answers: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
        comment: z.string(),
      }),
    ),
    correctAnswerId: z.string(),
    nextPage: z.string(),
  }),
});

export const collections = { question };
