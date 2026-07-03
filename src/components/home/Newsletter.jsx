import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="bg-ivory">
      <div className="container-page pb-20 md:pb-28">
        <div className="relative overflow-hidden bg-ink text-ivory">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(196,169,104,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(164,126,59,0.25), transparent 55%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-10 md:p-16 lg:p-20 items-center">
            <div>
              <p className="eyebrow text-gold-soft mb-4">The List</p>
              <h2
                id="newsletter-title"
                className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.05] text-ivory text-balance"
              >
                Join for 10% off
                <br />
                <span className="italic text-gold-soft">your first order.</span>
              </h2>
              <p className="mt-5 text-ivory/75 max-w-md text-sm md:text-base leading-relaxed">
                Be the first to know about new pieces, restocks, and quiet
                studio updates. No noise — promise.
              </p>
            </div>
            <div>
              <form onSubmit={onSubmit}>
                <label
                  htmlFor="newsletter-email"
                  className="eyebrow text-ivory/70 block mb-3"
                >
                  Email address
                </label>
                <div className="flex border-b border-ivory/30 focus-within:border-gold-soft transition-colors">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 bg-transparent text-ivory placeholder:text-ivory/40 py-3 text-base focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="text-ivory hover:text-gold-soft inline-flex items-center gap-2 px-2"
                    aria-label="Subscribe"
                  >
                    <span className="hidden sm:inline text-[11px] tracking-eyebrow uppercase">
                      Subscribe
                    </span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
                {submitted ? (
                  <p className="mt-4 text-sm text-gold-soft">
                    Thank you. Your code is on its way.
                  </p>
                ) : (
                  <p className="mt-4 text-xs text-ivory/50">
                    By subscribing, you agree to receive marketing emails.
                    Unsubscribe anytime.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
