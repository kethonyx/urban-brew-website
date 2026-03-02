"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-coffee-200 bg-white/70 text-slate-700 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-300/40 dark:border-coffee-700/60 dark:bg-neutral-950/80 dark:text-cream-50 dark:hover:bg-neutral-950"
      aria-label="Toggle dark mode"
    >
      <span className="sr-only">Toggle dark mode</span>
      {theme === "dark" ? (
        <span aria-hidden="true">☕</span>
      ) : (
        <span aria-hidden="true">🌙</span>
      )}
    </button>
  );
}

