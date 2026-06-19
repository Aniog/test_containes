import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useUI } from "@/context/CartContext";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { showToast } = useUI();

  const submit = (e) => {
    e.preventDefault();
    const v = email.trim();
    if (!v || !/^\S+@\S+\.\S+$/.test(v)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    showToast("Welcome — your 10% off code is on its way.");
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden bg-ink text-cream px-7 py-16 md:px-16 md:py-24">
            <div
              className="absolute inset-0 opacity-30"
              data-strk-bg-id="newsletter-bg"
              data-strk-bg="velmora editorial gold jewelry texture warm light soft"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1600"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-ink/70" />

            <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <p className="vm-eyebrow text-gold-soft">The Atelier Letter</p>
                <h2 className="vm-display text-cream mt-4 text-4xl md:text-6xl leading-[1.05]">
                  Join for{" "}
                  <span className="italic font-light text-gold-soft">10% off</span>{" "}
                  your first order.
                </h2>
                <p className="mt-5 text-cream/75 text-sm md:text-base max-w-md">
                  Quiet first access to new drops, behind-the-atelier notes, and the occasional birthday gift. No spam, ever.
                </p>
              </div>

              <form onSubmit={submit} className="w-full">
                <label htmlFor="newsletter-email" className="vm-eyebrow text-cream/70">
                  Email address
                </label>
                <div className="mt-3 flex items-center border-b border-cream/30 focus-within:border-gold-soft transition-colors">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="you@example.com"
                    className="flex-1 bg-transparent outline-none py-3.5 text-cream placeholder:text-cream/45 text-base"
                  />
                  <button type="submit" className="vm-btn vm-btn--accent py-3 px-5" aria-label="Subscribe">
                    Subscribe
                    <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
                  </button>
                </div>
                {error ? (
                  <p className="mt-3 text-[12px] text-rust" role="alert">{error}</p>
                ) : (
                  <p className="mt-3 text-[12px] text-cream/55">
                    By subscribing you agree to receive marketing emails. Unsubscribe any time.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
