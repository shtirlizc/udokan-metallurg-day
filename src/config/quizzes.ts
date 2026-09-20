export const QUIZ_STORAGE_KEYS = {
  metallurgistDay: "udokan_metallurgist_day_quiz",
  safety: "udokan_safety_quiz",
} as const;

export type QuizStorageKey =
  (typeof QUIZ_STORAGE_KEYS)[keyof typeof QUIZ_STORAGE_KEYS];
