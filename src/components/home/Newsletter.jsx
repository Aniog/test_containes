import React, { useState } from "react";

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
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gold rounded-sm px-6 py-12 md:px-16 md:py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-sm text-white/80 mb-8 max-w-md mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling tips.
          </p>

          {submitted ? (
            <p className="text-white font-serif text-lg">
              Thank you! Check your inbox for your welcome offer.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/15 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gold text-sm uppercase tracking-widest-xl font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
