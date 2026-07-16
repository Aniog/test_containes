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
    <section className="py-16 md:py-24 bg-velmora-dark">
      <div className="velmora-container max-w-2xl mx-auto text-center">
        <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-gold/70 mb-4">
          Join Velmora
        </p>
        <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
          Receive 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/40 font-sans mb-8 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="font-serif text-xl text-velmora-gold italic">
            Thank you — check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-white/20 text-white text-sm font-sans placeholder:text-white/30 focus:outline-none focus:border-velmora-gold/60 transition-colors"
            />
            <button type="submit" className="velmora-btn-primary whitespace-nowrap">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
