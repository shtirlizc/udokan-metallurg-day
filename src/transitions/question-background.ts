import { transitionTiming } from "./page-slide";

export const questionBackgroundTransition = {
  forwards: {
    old: {
      ...transitionTiming,
      name: "question-background-old-forward",
    },
    new: {
      ...transitionTiming,
      name: "question-background-new-forward",
    },
  },
  backwards: {
    old: {
      ...transitionTiming,
      name: "question-background-old-back",
    },
    new: {
      ...transitionTiming,
      name: "question-background-new-back",
    },
  },
};
