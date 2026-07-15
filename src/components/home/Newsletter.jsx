import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-espresso">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold/70 mb-4">
            Join Velmora
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-cream/50 text-sm mb-8">
            Subscribe to receive early access to new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-cream font-serif text-lg italic">Thank you — check your inbox for your code.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder:text-cream/30 px-5 py-3.5 text-sm outline-none focus:border-gold/50 transition-colors"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Sign Up
              </button>
            </form>
          )}

          <p className="text-cream/25 text-[10px] mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
