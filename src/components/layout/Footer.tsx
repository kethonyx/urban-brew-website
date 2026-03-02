import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-cream-50/80 py-8 text-sm text-slate-500 dark:border-coffee-800 dark:bg-neutral-950/95 dark:text-cream-200">
      <div className="container-default flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-slate-800 dark:text-cream-50">
            Urban Brew
          </p>
          <p>123 Brew Lane, Urbanville, CA 94110</p>
          <p>Open daily · 7:30am – 8:00pm</p>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end">
          <div className="flex gap-4">
            <Link href="#hero" className="hover:text-coffee-700 dark:hover:text-coffee-300">
              Back to top
            </Link>
            <Link href="mailto:hello@urbanbrew.example" className="hover:text-coffee-700 dark:hover:text-coffee-300">
              hello@urbanbrew.example
            </Link>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Urban Brew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

