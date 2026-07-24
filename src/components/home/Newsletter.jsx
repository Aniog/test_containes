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
    <section className="py-16 md:py-24 bg-gold-50 border-y border-gold-200/40">
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-headline md:text-display text-charcoal mb-3">
          Join for 10% off
        </h2>
        <p className="font-sans text-body text-charcoal-muted mb-8">
          Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-section text-gold mb-2">Thank you!</p>
            <p className="font-sans text-body text-charcoal-muted">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-white border border-cream-300 rounded font-sans text-body text-charcoal placeholder:text-taupe/60 focus:border-gold transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-charcoal hover:bg-charcoal-light text-cream-100 font-sans text-caption uppercase tracking-ultra-wide transition-colors duration-300 rounded whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
