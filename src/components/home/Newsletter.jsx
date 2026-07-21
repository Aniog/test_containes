import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      setError("That doesn’t look like a valid email.");
      return;
    }
    setStatus("submitting");
    // Placeholder — in a real build this would POST to /api/newsletter.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section
      aria-labelledby="newsletter-title"
      className="bg-espresso text-ivory"
    >
      <div className="container-velmora py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow !text-gold">Join the Atelier</p>
            <h2
              id="newsletter-title"
              className="heading-display text-3xl md:text-5xl mt-3 text-ivory"
            >
              10% off your first order —
              <br className="hidden md:block" /> and the occasional love letter.
            </h2>
            <p className="mt-5 font-sans text-sm md:text-base text-ivory/70 max-w-lg">
              New collections, restocks, and quiet dispatches from the studio.
              No noise — promise.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-5"
            aria-label="Sign up for the Velmora newsletter"
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="Your email"
                className="flex-1 bg-transparent border-b border-ivory/30 px-0 py-3 text-base text-ivory placeholder:text-ivory/45 focus:border-gold focus:outline-none transition-colors duration-300"
                aria-invalid={Boolean(error)}
                aria-describedby="newsletter-status"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gold text-espresso font-sans text-[11px] uppercase tracking-widest2 hover:bg-gold-soft transition-colors duration-500 disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Sending…"
                  : status === "success"
                    ? "Subscribed"
                    : "Subscribe"}
                {status === "success" ? (
                  <Check className="h-3.5 w-3.5" strokeWidth={1.6} />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                )}
              </button>
            </div>
            <p
              id="newsletter-status"
              role="status"
              aria-live="polite"
              className={`mt-3 font-sans text-[11px] ${
                error
                  ? "text-gold-soft"
                  : status === "success"
                    ? "text-gold-soft"
                    : "text-ivory/55"
              }`}
            >
              {error
                ? error
                : status === "success"
                  ? "Welcome — check your inbox for your code."
                  : "By subscribing you agree to our terms. Unsubscribe anytime."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
