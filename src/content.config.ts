import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const defineQuestionsCollection = (base: string) =>
  defineCollection({
    loader: glob({
      base,
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

const metallurgistQuestions = defineQuestionsCollection(
  "./src/content/metallurgist-day",
);
const safetyQuestions = defineQuestionsCollection("./src/content/safety");

export const collections = { metallurgistQuestions, safetyQuestions };
