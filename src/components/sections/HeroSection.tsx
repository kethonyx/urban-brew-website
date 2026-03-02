import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section-padding"
      aria-labelledby="hero-heading"
    >
      <div className="container-default grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <div className="pill w-fit">Modern café · Specialty coffee</div>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50"
          >
            Slow mornings,{" "}
            <span className="text-coffee-700 dark:text-coffee-300">
              perfectly brewed.
            </span>
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Urban Brew is a modern café where warm interiors meet specialty
            coffee, artisanal pastries, and an all-day brunch menu crafted for
            unhurried conversations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="btn-primary">
              Reserve a table
            </Link>
            <Link href="#menu" className="btn-ghost">
              View menu
            </Link>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-600 sm:text-base dark:text-slate-300 md:max-w-md">
            <div>
              <dt className="font-semibold text-slate-800 dark:text-slate-100">
                Opening hours
              </dt>
              <dd>Daily · 7:30am – 8:00pm</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800 dark:text-slate-100">
                Location
              </dt>
              <dd>123 Brew Lane, Urbanville</dd>
            </div>
          </dl>
        </div>

        <div className="relative h-80 overflow-hidden rounded-3xl bg-coffee-800 shadow-soft sm:h-96 md:h-[420px]">
          <Image
            src="/images/hero-coffee.jpg"
            alt="Barista pouring latte art at Urban Brew café"
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-black/40 p-4 text-sm text-cream-50 backdrop-blur">
            <div>
              <p className="font-medium">Seasonal single-origin</p>
              <p className="text-xs text-cream-100/80">
                Rotating selection from small farms, roasted in-house weekly.
              </p>
            </div>
            <p className="rounded-full bg-cream-50/10 px-3 py-1 text-xs">
              Light &amp; fruity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

