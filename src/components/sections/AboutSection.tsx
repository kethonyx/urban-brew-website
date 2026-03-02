export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="container-default grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <p className="pill w-fit">About Urban Brew</p>
          <h2
            id="about-heading"
            className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
          >
            A modern café inspired by the rhythm of the city.
          </h2>
          <p className="text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Urban Brew was born from a love of slow mornings, vinyl records, and
            perfectly extracted espresso. We source our beans from small,
            sustainable farms and roast them locally for a clean, balanced cup
            every time.
          </p>
          <p className="text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Our space is designed with warm woods, soft lighting, and generous
            seating – ideal for catching up with friends, working remotely, or
            simply taking a quiet moment for yourself.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-cream-200 sm:grid-cols-2">
            <li className="card-surface p-4">
              <p className="font-semibold">Specialty coffee program</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Seasonal single-origin espresso and slow bar brews.
              </p>
            </li>
            <li className="card-surface p-4">
              <p className="font-semibold">All-day brunch</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Thoughtful, fresh plates with vegetarian and vegan options.
              </p>
            </li>
          </ul>
        </div>
        <div className="card-surface flex flex-col gap-4 p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-coffee-700 dark:text-coffee-300">
            At a glance
          </h3>
          <dl className="grid grid-cols-1 gap-4 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-slate-800 dark:text-slate-100">Wi‑Fi &amp; power</dt>
              <dd>Fast Wi‑Fi, plenty of outlets, and quiet corners for focus.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800 dark:text-slate-100">Music</dt>
              <dd>Lo-fi, jazz, and soul at a comfortable volume.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800 dark:text-slate-100">Dietary friendly</dt>
              <dd>Oat, almond, and soy milk · Gluten-friendly options.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800 dark:text-slate-100">Pet friendly</dt>
              <dd>Outdoor seating area for you and your coffee companion.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

