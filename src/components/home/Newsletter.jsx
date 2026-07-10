import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useReveal();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-editorial mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className="reveal relative overflow-hidden bg-ink text-cream px-7 py-16 sm:px-14 sm:py-20 md:px-20 md:py-24"
        >
          {/* decorative gold corner */}
          <span
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold-500/15 blur-2xl"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-gold-400/10 blur-2xl"
          />

          <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="eyebrow !text-cream/60 mb-5">The Atelier Letter</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] mb-5 max-w-md">
                Join for 10% off your first order.
              </h2>
              <p className="text-cream/70 text-sm sm:text-base max-w-md font-sans leading-relaxed">
                Slow launches, style notes, and the occasional behind-the-scenes from the
                atelier. Twice a month, never spammy.
              </p>
            </div>

            <form onSubmit={onSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch border border-white/20 focus-within:border-gold transition-colors">
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
                  className="flex-1 bg-transparent px-4 py-4 text-cream placeholder:text-cream/40 outline-none font-sans text-sm"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-6 sm:px-8 font-sans text-[0.7rem] tracking-widest2 uppercase font-medium hover:bg-gold transition-colors"
                >
                  Subscribe
                  <ArrowRight size={14} strokeWidth={1.6} />
                </button>
              </div>
              <p
                className={`text-xs mt-3 font-sans transition-colors ${
                  submitted ? "text-gold-200" : "text-cream/45"
                }`}
                role="status"
              >
                {submitted
                  ? "Welcome — check your inbox for your 10% off code."
                  : "By subscribing you agree to our privacy policy."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
