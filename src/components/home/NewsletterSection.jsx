import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-white/80 text-sm sm:text-base mb-8">
          Subscribe for 10% off your first order, early access to new
          collections, and styling inspiration.
        </p>
        {submitted ? (
          <p className="text-white font-medium">
            Welcome aboard. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-white text-velmora-gold text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-cream transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
