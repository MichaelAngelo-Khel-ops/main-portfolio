import gsap from "gsap";

export function handleNavigation(event, href, stickyElement) {
  const target = document.getElementById(href.slice(1));

  // Preserve native behavior for modified clicks or links without a target.
  if (
    !target ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const offset = stickyElement?.offsetHeight ?? 0;

  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }

  gsap.killTweensOf(window);

  if (reduceMotion) {
    target.scrollIntoView({ behavior: "instant" });
    window.scrollBy(0, -offset);
    target.focus({ preventScroll: true });
    return;
  }

  gsap.to(window, {
    duration: 1,
    ease: "power2.inOut",
    scrollTo: {
      y: target,
      offsetY: offset + 16,
      autoKill: true,
    },
    overwrite: "auto",
    onComplete: () => {
      target.focus({ preventScroll: true });
    },
  });
}
