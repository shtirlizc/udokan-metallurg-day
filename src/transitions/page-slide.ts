export const transitionTiming = {
  duration: "3s",
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
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
