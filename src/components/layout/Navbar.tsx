"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-100/60 bg-cream-50/80 backdrop-blur-md dark:border-coffee-800 dark:bg-neutral-950/95">
      <div className="container-default flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-coffee-700 text-cream-50 shadow-soft">
            <span className="text-lg font-semibold">UB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-tight">Urban Brew</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Modern café for slow mornings
            </span>
          </div>
        </div>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex dark:text-slate-200"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-coffee-700 dark:hover:text-coffee-300"
            >
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary">
            Book a table
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 p-2 text-slate-700 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 dark:border-black dark:bg-black/80 dark:text-cream-50 dark:hover:bg-black"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-black/70 dark:bg-cream-50" />
              <span className="block h-0.5 w-4 rounded-full bg-black/70 dark:bg-cream-50" />
              <span className="block h-0.5 w-3 rounded-full bg-black/70 dark:bg-cream-50" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200/70 bg-cream-50/95 px-4 pb-4 pt-2 shadow-sm dark:border-black dark:bg-black md:hidden">
          <nav className="container-default flex flex-col gap-3 text-sm font-medium" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-slate-800 transition hover:bg-white dark:text-cream-50 dark:hover:bg-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-primary mt-1 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Book a table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

