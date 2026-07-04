import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Welcome to Velmora — your 10% code is on its way to " + email);
    setEmail("");
  }

  return (
    <section className="bg-gold">
      <div className="container-editorial py-20 md:py-24 text-center">
        <p className="eyebrow text-ink/70">The Velmora Letter</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mt-3 tracking-[-0.01em] max-w-3xl mx-auto text-balance">
          Join for 10% off your first order.
        </h2>
        <p className="mt-5 text-sm md:text-base text-ink/80 max-w-md mx-auto leading-relaxed">
          Early access to new collections, private restocks, and a slow letter from our atelier once a month.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 mx-auto max-w-md flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-ink/30 px-4 py-3.5 text-sm text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none transition-colors"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-ink-soft transition-colors duration-300"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </form>
        <p className="text-[10px] uppercase tracking-[0.22em] text-ink/60 mt-5">
          No spam, ever. Unsubscribe in one click.
        </p>
      </div>
    </section>
  );
}
