import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-espresso relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />

      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center relative z-10">
        <p className="text-xs tracking-mega-wide uppercase text-gold-light mb-3 font-sans font-medium">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
          Be the first to discover new collections, exclusive offers, and styling
          inspiration.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="group px-8 py-3.5 bg-gold text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 text-gold-light animate-fade-in">
            <Check size={20} />
            <p className="text-sm font-medium">
              Welcome to Velmora! Check your inbox for your 10% discount code.
            </p>
          </div>
        )}

        <p className="text-[11px] text-white/30 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
