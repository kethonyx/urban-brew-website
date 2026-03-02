type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Local designer",
    quote:
      "Urban Brew is my go-to spot for focused work sessions. The coffee is consistently great and the playlist is always on point."
  },
  {
    name: "Priya Desai",
    role: "Regular since 2022",
    quote:
      "The staff know my order by heart and the space feels like a second living room. Their oat flat white is unmatched."
  },
  {
    name: "James Lee",
    role: "Food photographer",
    quote:
      "Beautiful natural light, thoughtful plating, and friendly baristas – it's a dream location for brunch shoots."
  }
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-cream-100/80 dark:bg-black/60"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-default space-y-8">
        <div className="space-y-3">
          <p className="pill w-fit">Testimonials</p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
          >
            Loved by regulars, neighbors, and newcomers.
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Hear from a few of the people who make Urban Brew part of their weekly ritual.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="card-surface flex h-full flex-col justify-between p-6 sm:p-7"
            >
              <blockquote className="text-sm text-slate-700 dark:text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-slate-50">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

