import { transitionTiming } from "./page-slide";

export const questionBackgroundTransition = {
  forwards: {
    old: {
      ...transitionTiming,
      name: "metallurgist-day-background-old-forward",
    },
    new: {
      ...transitionTiming,
      name: "metallurgist-day-background-new-forward",
    },
  },
  backwards: {
    old: {
      ...transitionTiming,
      name: "metallurgist-day-background-old-back",
    },
    new: {
      ...transitionTiming,
      name: "metallurgist-day-background-new-back",
    },
  },
};
