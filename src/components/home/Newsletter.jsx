import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="bg-espresso text-canvas">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-widest2 text-gold-soft mb-3">
              The Velmora Letter
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Join for <em className="text-gold-soft not-italic">10% off</em>
              <br /> your first order.
            </h2>
            <p className="mt-4 text-canvas/75 text-sm md:text-base max-w-md">
              Quiet drops, restocks, and the occasional love letter. No noise, no spam.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="md:col-span-5 w-full"
            aria-label="Newsletter signup"
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-canvas/40 text-canvas placeholder:text-canvas/50 px-4 h-12 text-sm focus:border-gold-soft outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-canvas text-espresso h-12 px-6 text-[11px] uppercase tracking-widest2 font-medium hover:bg-gold-soft transition-colors"
              >
                {done ? "Welcome" : "Subscribe"}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-widest2 text-canvas/55">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
