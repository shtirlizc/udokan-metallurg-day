import type { CollectionEntry } from "astro:content";

export type QuizCollection = "metallurgistQuestions" | "safetyQuestions";

export type QuizQuestion = CollectionEntry<QuizCollection>;

export type QuizAnswer = QuizQuestion["data"]["answers"][number];
