"use strict";
// Mobile Drawer Menu Toggle System
document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.getElementById("mobileDrawerMenu");
  const overlay = document.getElementById("drawerOverlay"); // New overlay
  const openBtns = document.querySelectorAll(".cv_toggle_btn");
  const closeBtns = document.querySelectorAll(".cv_menu_close");
  const drawerLinks = document.querySelectorAll("#mobileDrawerMenu .nav-link");

  if (!drawer) return;

  const openDrawer = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Slide drawer in
    drawer.classList.remove("translate-x-full");
    drawer.classList.add("translate-x-0");

    // Fade overlay in
    overlay.classList.remove("hidden");
    // Small delay to allow display:block to apply before animating opacity
    setTimeout(() => overlay.classList.remove("opacity-0"), 10);

    document.body.classList.add("overflow-hidden");
  };

  const closeDrawer = (e) => {
    if (e) e.preventDefault();

    // Slide drawer out
    drawer.classList.remove("translate-x-0");
    drawer.classList.add("translate-x-full");

    // Fade overlay out
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 300); // Wait for transition

    document.body.classList.remove("overflow-hidden");
  };

  openBtns.forEach((btn) => btn.addEventListener("click", openDrawer));
  closeBtns.forEach((btn) => btn.addEventListener("click", closeDrawer));
  drawerLinks.forEach((link) =>
    link.addEventListener("click", () => closeDrawer()),
  );

  // Close when clicking the overlay
  if (overlay) {
    overlay.addEventListener("click", closeDrawer);
  }
});

// Intersection Observer for Active Section Highlighting
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = [];

  // 1. Map links to existing section elements on the page
  navLinks.forEach((link) => {
    const hash = link.getAttribute("href");
    if (hash && hash.startsWith("#")) {
      const section = document.querySelector(hash);
      if (section && !sections.includes(section)) {
        sections.push(section);
      }
    }
  });

  // 2. Define Observer options
  // rootMargin adjusting "-30% 0px -60% 0px" pinpoints active sections near the top-middle viewport area
  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -60% 0px",
    threshold: 0,
  };

  // 3. Callback mechanism to process active items
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = `#${entry.target.id}`;

        navLinks.forEach((link) => {
          const isCurrentTarget = link.getAttribute("href") === activeId;
          const isMobileLink = link.closest("#mobileDrawerMenu") !== null;

          if (isCurrentTarget) {
            // Base active classes for both
            link.classList.add("active", "text-zinc-950", "dark:text-zinc-100");
            link.classList.remove("text-zinc-600", "dark:text-zinc-400");

            if (isMobileLink) {
              // Mobile specific active background structure
              link.classList.add(
                "bg-zinc-100/80",
                "dark:bg-zinc-900/60",
                "font-semibold",
              );
            } else {
              // Desktop link underline indicator
              link.classList.add(
                "relative",
                "after:absolute",
                "after:bottom-[-22px]",
                "after:left-0",
                "after:w-full",
                "after:h-[1px]",
                "after:bg-zinc-950",
                "dark:after:bg-zinc-100",
              );
            }
          } else {
            // Standard revert states
            link.classList.remove(
              "active",
              "text-zinc-950",
              "dark:text-zinc-100",
              "font-semibold",
            );
            link.classList.add("text-zinc-600", "dark:text-zinc-400");

            if (isMobileLink) {
              link.classList.remove("bg-zinc-100/80", "dark:bg-zinc-900/60");
            } else {
              link.classList.remove(
                "relative",
                "after:absolute",
                "after:bottom-[-22px]",
                "after:left-0",
                "after:w-full",
                "after:h-[1px]",
                "after:bg-zinc-950",
                "dark:after:bg-zinc-100",
              );
            }
          }
        });
      }
    });
  };

  // 4. Fire up the layout Observer System
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach((section) => observer.observe(section));
});
