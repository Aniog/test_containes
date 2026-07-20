import React from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ebony">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-velmora-gold text-xs tracking-widest uppercase font-sans mb-3">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-warm-white leading-tight">
          Receive 10% Off
          <br />
          Your First Order
        </h2>
        <p className="text-velmora-stone text-sm md:text-base mt-4 leading-relaxed font-sans max-w-md mx-auto">
          Be the first to know about new collections, exclusive previews, and
          members-only offers.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3 bg-velmora-warm-white/10 border border-velmora-warm-white/20 text-velmora-warm-white placeholder:text-velmora-stone/50 text-sm font-sans focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button
            type="submit"
            className="btn-accent inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <p className="text-xs text-velmora-stone/60 mt-4 font-sans">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}