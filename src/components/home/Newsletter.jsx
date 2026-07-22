import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitted

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("submitted");
  };

  return (
    <section className="bg-ink text-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-gold mb-4">Welcome to Velmora</p>
          <h2 className="display-md text-cream">
            Join for <em className="font-serif italic font-light text-gold-soft">10% off</em> your first order.
          </h2>
          <p className="mt-5 text-cream/70 font-sans font-light text-[15px]">
            Be the first to know about new collections, behind-the-studio
            moments, and the occasional private sale.
          </p>
          {status === "submitted" ? (
            <p className="mt-9 font-serif italic text-cream text-xl">
              Thank you — your code is on its way.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/45 px-5 py-3.5 rounded-full font-sans text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="btn-on-dark group whitespace-nowrap"
              >
                Subscribe
                <ArrowRight
                  strokeWidth={1.5}
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          )}
          <p className="mt-5 text-[11px] uppercase tracking-wider-3 font-sans text-cream/45">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
