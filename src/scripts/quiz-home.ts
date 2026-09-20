function resetQuizStorageOnHomePage() {
  const quizHome = document.querySelector<HTMLElement>("[data-quiz-home]");
  const homePath = quizHome?.dataset.quizHome;
  const storageKey = quizHome?.dataset.quizStorageKey;

  if (!homePath || !storageKey) return;

  const pathname = decodeURIComponent(window.location.pathname).replace(
    /\/$/,
    "",
  );

  if (pathname !== homePath) return;

  try {
    sessionStorage.removeItem(storageKey);
  } catch {
    // Storage can be unavailable because of the browser's privacy settings.
  }
}

resetQuizStorageOnHomePage();
document.addEventListener("astro:page-load", resetQuizStorageOnHomePage);
