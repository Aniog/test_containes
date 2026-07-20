import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
  };

  return (
    <section className="bg-espresso text-ivory" aria-labelledby="newsletter-title">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p id="newsletter-eyebrow" className="text-[0.7rem] uppercase tracking-[0.32em] text-brass-soft/90 mb-4">
          The Velmora Letter
        </p>
        <h2
          id="newsletter-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Join for 10% off your first order.
        </h2>
        <p className="mt-5 text-sm md:text-base text-ivory/70 max-w-lg mx-auto leading-relaxed">
          Quiet, considered emails — early access to new collections, the
          occasional studio story, and a first-look at our seasonal gifts.
        </p>

        {status === "success" ? (
          <div
            role="status"
            className="mt-9 inline-flex items-center gap-2 text-ivory/90"
          >
            <Check className="w-4 h-4 text-brass-soft" strokeWidth={1.4} />
            <span className="text-sm">Welcome — your code is on its way.</span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 mx-auto max-w-md flex flex-col sm:flex-row items-stretch gap-3"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-ivory/30 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-ivory/70 transition-colors"
            />
            <button type="submit" className="btn-light whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </button>
          </form>
        )}

        <p className="mt-5 text-[0.65rem] uppercase tracking-[0.22em] text-ivory/45">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
