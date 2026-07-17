import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-22 bg-velmora-charcoal">
      <div className="container-narrow text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-10 h-hairline bg-velmora-gold" />
            <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
              Stay in Touch
            </span>
            <span className="w-10 h-hairline bg-velmora-gold" />
          </div>
          <h2 className="font-serif text-heading-lg md:text-heading-xl text-velmora-white mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-body text-velmora-white/50 mb-8">
            Be the first to discover new arrivals, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-body text-velmora-gold font-sans">
              Thank you for joining the Velmora family. Check your inbox for your welcome gift.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border border-velmora-white/20 text-velmora-white placeholder:text-velmora-white/30 px-5 py-4 font-sans text-body-sm focus:border-velmora-gold focus:outline-none transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
