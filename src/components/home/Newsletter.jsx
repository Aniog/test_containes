import React, { useState } from 'react';

export default function Newsletter() {
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
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
          10% Off Your First Order
        </h2>
        <p className="text-sm text-white/50 mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="text-gold font-sans text-sm">
            Thank you for joining! Check your inbox for your welcome gift.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[10px] text-white/20 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
