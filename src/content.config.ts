import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const metallurgistQuestions = defineCollection({
  loader: glob({
    base: "./src/content/metallurgist-day",
    pattern: "**/index.json",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: ({ image }) =>
    z.object({
      questionNumber: z.number(),
      questionText: z.string(),
      backgrounds: z.object({
        desktop: image(),
        mobile: image(),
        charsDesktop: image(),
        charsMobile: image(),
      }),
      answers: z.array(
        z.object({
          id: z.string(),
          text: z.string(),
          comment: z.string(),
        }),
      ),
      correctAnswerId: z.string(),
      nextPage: z.string(),
      isLast: z.boolean().optional(),
    }),
});

export const collections = { metallurgistQuestions };
