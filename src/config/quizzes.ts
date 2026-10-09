export const QUIZ_STORAGE_KEYS = {
  metallurgistDay: "udokan_metallurgist_day_quiz",
  safety: "udokan_safety_quiz",
} as const;

export type QuizStorageKey =
  (typeof QUIZ_STORAGE_KEYS)[keyof typeof QUIZ_STORAGE_KEYS];

export const SAFETY_META = {
  title: "Удокан — это безопасность",
  description:
    "Сможете своим примером доказать, что забота о безопасности заложена в ДНК людей Удокана?",
  coverSrc: "/safety-cover.jpg",
  coverAlt: "Иван и Арина — Удокан это безопасность",
} as const;
