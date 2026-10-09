export type QuizAnswerResult = "success" | "fail";

export interface QuizResult {
  answers: Record<string, QuizAnswerResult>;
  correctAnswersCount: number;
  totalAnswers: number;
}

export function readStoredQuizResult(
  storageKey: string,
  questionsCount: number,
  excludedQuestionNumbers: string[] = [],
): QuizResult | null {
  if (!Number.isInteger(questionsCount) || questionsCount <= 0) return null;

  let savedResult: string | null;

  try {
    savedResult = sessionStorage.getItem(storageKey);
  } catch {
    return null;
  }

  if (!savedResult) return null;

  let parsedResult: unknown;

  try {
    parsedResult = JSON.parse(savedResult);
  } catch {
    return null;
  }

  if (
    !parsedResult ||
    typeof parsedResult !== "object" ||
    Array.isArray(parsedResult)
  ) {
    return null;
  }

  const entries = Object.entries(parsedResult);

  if (
    entries.length !== questionsCount ||
    !entries.every(([, value]) => value === "success" || value === "fail")
  ) {
    return null;
  }

  // Keep all answers in storage for navigation and completion checks.
  // Only considered questions contribute to the report.
  const consideredEntries = entries.filter(
    ([questionNumber]) => !excludedQuestionNumbers.includes(questionNumber),
  );
  const answers = Object.fromEntries(consideredEntries) as Record<
    string,
    QuizAnswerResult
  >;
  const correctAnswersCount = consideredEntries.filter(
    ([, value]) => value === "success",
  ).length;

  return {
    answers,
    correctAnswersCount,
    totalAnswers: consideredEntries.length,
  };
}
