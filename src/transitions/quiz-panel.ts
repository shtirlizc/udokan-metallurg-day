import { transitionTiming } from "./page-slide";

export const quizPanelTransition = {
  forwards: {
    old: {
      ...transitionTiming,
      name: "quiz-panel-leave",
    },
    new: {
      ...transitionTiming,
      name: "quiz-panel-enter",
    },
  },
  backwards: {
    old: {
      ...transitionTiming,
      name: "quiz-panel-leave-back",
    },
    new: {
      ...transitionTiming,
      name: "quiz-panel-enter-back",
    },
  },
};
