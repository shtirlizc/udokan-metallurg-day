export const transitionTiming = {
  duration: "1.5s",
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  fillMode: "both",
};

export const pageSlide = {
  forwards: {
    old: {
      ...transitionTiming,
      name: "page-slide-out-up",
    },
    new: {
      ...transitionTiming,
      name: "page-slide-in-up",
    },
  },
  backwards: {
    old: {
      ...transitionTiming,
      name: "page-slide-out-down",
    },
    new: {
      ...transitionTiming,
      name: "page-slide-in-down",
    },
  },
};
