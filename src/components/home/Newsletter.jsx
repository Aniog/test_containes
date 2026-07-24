import React, { useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <Mail size={22} strokeWidth={1.25} className="mx-auto text-gold" />
          <p className="mt-5 text-[11px] font-medium uppercase tracking-widest2 text-gold">
            The Velmora Letter
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Join for <em className="italic">10% off</em> your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            New arrivals, styling notes and private offers — once a week, never more.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {done ? (
            <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-gold/50 bg-gold/10 px-6 py-4">
              <Check size={18} strokeWidth={1.5} className="shrink-0 text-gold" />
              <p className="text-sm text-cream">
                Welcome to Velmora — your code is on its way to{" "}
                <span className="font-medium text-gold">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-9 max-w-md" noValidate>
              <div className="flex border border-cream/30 bg-transparent transition-colors focus-within:border-gold">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="w-full bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center gap-2 bg-gold px-6 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-colors duration-300 hover:bg-gold-deep"
                >
                  <span className="hidden sm:inline">Subscribe</span>
                  <ArrowRight size={15} strokeWidth={1.5} />
                </button>
              </div>
              {error && <p className="mt-3 text-xs text-gold">{error}</p>}
              <p className="mt-4 text-[11px] text-cream/40">
                By subscribing you agree to our privacy policy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
