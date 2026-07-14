import { transitionTiming } from "./page-slide";

export const charsTransition = {
  forwards: {
    old: {
      ...transitionTiming,
      name: "chars-old-forward",
    },
    new: {
      ...transitionTiming,
      name: "chars-new-forward",
    },
  },
  backwards: {
    old: {
      ...transitionTiming,
      name: "chars-old-back",
    },
    new: {
      ...transitionTiming,
      name: "chars-new-back",
    },
  },
};
