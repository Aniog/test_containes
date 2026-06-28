import { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Decorative hairline */}
          <div className="mx-auto h-px w-12 bg-velmora-gold" />
          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-velmora-gold">
            The Velmora Letter
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-velmora-cream md:text-5xl lg:text-[56px]">
            Join for <em className="italic text-velmora-gold">10% off</em> your first order.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-velmora-cream/75 md:text-[16px]">
            New collection previews, atelier stories, and quiet sales — twice a month. Never spam.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border border-velmora-cream/25 bg-transparent px-5 py-4 text-[14px] text-velmora-cream placeholder:text-velmora-cream/40 focus:border-velmora-gold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-velmora-gold px-8 py-4 text-[11px] uppercase tracking-[0.26em] text-velmora-ink transition-colors duration-300 hover:bg-velmora-cream"
            >
              Subscribe
            </button>
          </form>

          {error && (
            <p role="alert" className="mt-4 text-[12px] text-velmora-gold">
              {error}
            </p>
          )}
          {submitted && (
            <p role="status" className="mt-5 inline-flex items-center gap-2 text-[13px] text-velmora-gold">
              <Check className="h-4 w-4" strokeWidth={1.6} />
              Welcome. Your code is on its way to your inbox.
            </p>
          )}

          <p className="mt-6 text-[11px] text-velmora-cream/45">
            By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
