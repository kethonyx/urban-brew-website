type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

const espressoBar: MenuItem[] = [
  {
    name: "Urban Espresso",
    description: "Double shot, caramelized sweetness, velvety crema.",
    price: "$3.80",
    tag: "House blend"
  },
  {
    name: "Flat White",
    description: "Rich ristretto espresso with silky microfoam.",
    price: "$4.80",
    tag: "Guest roast"
  },
  {
    name: "Iced Oat Latte",
    description: "Single-origin espresso over ice with oat milk.",
    price: "$5.20",
    tag: "Best seller"
  }
];

const brunchPlates: MenuItem[] = [
  {
    name: "Sourdough Avocado Toast",
    description: "Citrus dressed avocado, pickled shallots, sesame crunch.",
    price: "$12.00",
    tag: "Vegan"
  },
  {
    name: "Soft Scramble Brioche",
    description: "Soft scrambled eggs, chives, brown butter on brioche.",
    price: "$13.50"
  },
  {
    name: "Granola & Citrus Yogurt",
    description: "House granola, vanilla yogurt, seasonal fruit.",
    price: "$10.50"
  }
];

export function MenuSection() {
  return (
    <section
      id="menu"
      className="section-padding bg-white/60 dark:bg-black/40"
      aria-labelledby="menu-heading"
    >
      <div className="container-default space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="pill w-fit">Menu highlights</p>
            <h2
              id="menu-heading"
              className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
            >
              Thoughtful coffee &amp; all-day brunch.
            </h2>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
              Our menu changes seasonally with a focus on quality ingredients, balanced flavors, and
              options for different dietary needs.
            </p>
          </div>
          <div className="rounded-2xl bg-coffee-800 px-4 py-3 text-xs text-cream-50 shadow-soft sm:text-sm">
            <p className="font-medium">Full menu available in-store.</p>
            <p className="text-cream-100/80">
              Ask our baristas about decaf, alt milks, and seasonal specials.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <MenuColumn title="Espresso bar" items={espressoBar} />
          <MenuColumn title="Brunch plates" items={brunchPlates} />
        </div>
      </div>
    </section>
  );
}

function MenuColumn({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="card-surface h-full p-6 sm:p-7">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-coffee-700 dark:text-coffee-300">
        {title}
      </h3>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.name} className="flex gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-slate-900 dark:text-slate-50">{item.name}</p>
                {item.tag ? (
                  <span className="rounded-full bg-coffee-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-coffee-700 dark:bg-black/60 dark:text-cream-100">
                    {item.tag}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

