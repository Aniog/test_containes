import React, { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 2500);
    }
  };

  return (
    <section className="newsletter py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="heading-serif text-3xl text-white mb-3">Join for 10% off your first order</h2>
        <p className="text-white/70 text-sm tracking-wide mb-8">
          Be the first to know about new collections, styling tips, and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-white text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="input flex-1 bg-white/95 placeholder:text-[var(--color-text-muted)] text-[var(--color-text)] uppercase tracking-widest text-sm"
              required
            />
            <button type="submit" className="btn bg-white text-[var(--color-accent)] hover:bg-[var(--color-bg)] whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-white/50 mt-4 tracking-widest">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
