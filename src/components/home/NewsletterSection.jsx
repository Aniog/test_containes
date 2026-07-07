import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[var(--velmora-gold)] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-white/80 mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="serif-heading text-xl mb-2">Welcome to Velmora</p>
            <p className="text-sm text-white/80">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition-colors"
              required
            />
            <button type="submit" className="btn-dark whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
