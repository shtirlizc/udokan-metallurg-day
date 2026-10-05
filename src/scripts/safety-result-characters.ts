import { readStoredQuizResult } from "./quiz-result";

export function setSafetyResultCharacters(
  resultElement: HTMLElement,
  correctAnswersCount: number,
) {
  let variant: string;

  if (correctAnswersCount <= 3) {
    variant = "1";
  } else if (correctAnswersCount <= 5) {
    variant = "2";
  } else {
    variant = "3";
  }

  resultElement
    .querySelectorAll<HTMLElement>("[data-result-chars]")
    .forEach((picture) => {
      picture.hidden = picture.dataset.resultChars !== variant;
    });

  return variant;
}

// Select characters in the incoming document before preloading and snapshotting.
export function prepareSafetyResultCharacters(incomingDocument: Document) {
  const resultElement = incomingDocument.querySelector<HTMLElement>(
    "[data-safety-result-scene] [data-quiz-result]",
  );
  if (!resultElement?.dataset.quizStorageKey) return;

  const result = readStoredQuizResult(
    resultElement.dataset.quizStorageKey,
    Number(resultElement.dataset.questionsCount),
    JSON.parse(resultElement.dataset.excludedQuestionNumbers ?? "[]"),
  );

  if (result) {
    setSafetyResultCharacters(resultElement, result.correctAnswersCount);
  }
}
