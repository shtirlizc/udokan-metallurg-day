function initTileReveal() {
  document
    .querySelectorAll<HTMLElement>("[data-tile-reveal]")
    .forEach((tile) => {
      if (tile.dataset.revealInitialized) return;
      tile.dataset.revealInitialized = "true";

      let frameId: number | undefined;

      const cleanup = () => {
        window.removeEventListener("scroll", queueRevealCheck);
        window.removeEventListener("resize", queueRevealCheck);
        document.removeEventListener("astro:before-swap", cleanup);
        if (frameId !== undefined) window.cancelAnimationFrame(frameId);
      };

      const revealIfVisible = () => {
        frameId = undefined;
        const rect = tile.getBoundingClientRect();
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
        );
        const requiredVisibleHeight =
          Math.min(rect.height, window.innerHeight) * 0.8;

        if (rect.height <= 0 || visibleHeight < requiredVisibleHeight) return;

        tile.classList.add("is-tile-visible");
        cleanup();
      };

      function queueRevealCheck() {
        if (frameId !== undefined) return;
        frameId = window.requestAnimationFrame(revealIfVisible);
      }

      window.addEventListener("scroll", queueRevealCheck, { passive: true });
      window.addEventListener("resize", queueRevealCheck);
      document.addEventListener("astro:before-swap", cleanup, { once: true });
      queueRevealCheck();
    });
}

document.addEventListener("astro:page-load", initTileReveal);
