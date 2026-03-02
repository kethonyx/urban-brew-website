"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  guests: string;
  date: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    guests: "",
    date: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please share a few details about your visit.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: "",
        guests: "",
        date: ""
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container-default grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <div className="space-y-4">
          <p className="pill w-fit">Contact &amp; reservations</p>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
          >
            Reserve a table or plan your next gathering.
          </h2>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Share a few details and our team will get back to you within one business day to confirm
            availability.
          </p>
          <dl className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <div>
              <dt className="font-semibold text-slate-900 dark:text-slate-50">Phone</dt>
              <dd>+1 (555) 0123-456</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-slate-50">Email</dt>
              <dd>hello@urbanbrew.example</dd>
            </div>
          </dl>
        </div>

        <div className="card-surface p-6 sm:p-7">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-800 dark:text-slate-100"
                >
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-black dark:bg-black dark:text-cream-50 dark:placeholder:text-cream-300 dark:focus:border-coffee-300 dark:focus:ring-coffee-500/40"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-800 dark:text-slate-100"
                >
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-black dark:bg-black dark:text-cream-50 dark:placeholder:text-cream-300 dark:focus:border-coffee-300 dark:focus:ring-coffee-500/40"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-slate-800 dark:text-slate-100"
                >
                  Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="12"
                  value={form.guests}
                  onChange={handleChange("guests")}
                  className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-black dark:bg-black dark:text-cream-50 dark:placeholder:text-cream-300 dark:focus:border-coffee-300 dark:focus:ring-coffee-500/40"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-slate-800 dark:text-slate-100"
                >
                  Preferred date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange("date")}
                  className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-black dark:bg-black dark:text-cream-50 dark:focus:border-coffee-300 dark:focus:ring-coffee-500/40"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-800 dark:text-slate-100"
              >
                How can we help?*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange("message")}
                className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 dark:border-black dark:bg-black dark:text-cream-50 dark:placeholder:text-cream-300 dark:focus:border-coffee-300 dark:focus:ring-coffee-500/40"
                placeholder="Share any timing, occasion, or seating details."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {submitError ? (
              <p className="text-sm text-red-600" role="alert">
                {submitError}
              </p>
            ) : null}

            {submitted ? (
              <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">
                Thank you for reaching out. We&apos;ll follow up shortly to confirm details.
              </p>
            ) : null}

            <button
              type="submit"
              className="btn-primary w-full justify-center sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

