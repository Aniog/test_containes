import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="container-content pb-20 md:pb-28"
    >
      <div className="relative overflow-hidden bg-ink-deep text-ink-inverse">
        {/* Decorative gold corner */}
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="relative grid items-center gap-10 px-6 py-14 md:grid-cols-12 md:gap-12 md:px-14 md:py-20">
          <div className="md:col-span-7">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-gold-soft">
              The Velmora Letter
            </p>
            <h2
              id="newsletter-heading"
              className="mt-3 font-serif text-4xl leading-tight text-ivory md:text-5xl"
            >
              Join for 10% off your first order.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-inverse/70 md:text-base">
              New edits, behind-the-bench notes, and the occasional first look — delivered monthly. No noise.
            </p>
          </div>
          <div className="md:col-span-5">
            {submitted ? (
              <div className="border border-gold-soft/40 bg-ink-deepSoft p-6">
                <p className="font-serif text-2xl text-ivory">Welcome in.</p>
                <p className="mt-2 text-sm text-ink-inverse/70">
                  Your 10% code is on its way to <span className="text-gold-soft">{email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="flex-1 border-b border-ink-inverse/30 bg-transparent px-1 py-3 text-ivory placeholder:text-ink-inverse/45 focus:border-gold-soft focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 self-start bg-gold px-7 py-3.5 cta-label text-ivory transition-all duration-200 hover:-translate-y-px hover:bg-gold-deep sm:self-auto"
                  >
                    Subscribe
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
                {error && (
                  <p
                    id="newsletter-error"
                    className="mt-3 text-xs text-gold-soft"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
                <p className="mt-4 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-inverse/55">
                  By subscribing you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
