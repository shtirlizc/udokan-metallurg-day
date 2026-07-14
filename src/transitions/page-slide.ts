const timing = {
  duration: "0.55s",
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  fillMode: "both",
};

export const pageSlide = {
  forwards: {
    old: {
      ...timing,
      name: "page-slide-out-up",
    },
    new: {
      ...timing,
      name: "page-slide-in-up",
    },
  },
  backwards: {
    old: {
      ...timing,
      name: "page-slide-out-down",
    },
    new: {
      ...timing,
      name: "page-slide-in-down",
    },
  },
};
