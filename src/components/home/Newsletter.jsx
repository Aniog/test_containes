import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

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
    <section className="bg-surface-cream section-padding py-16 lg:py-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-overline uppercase text-brand-gold mb-3">Stay Connected</p>
        <h2 className="font-serif text-heading-2 text-text-dark tracking-[0.03em] mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-body text-text-dark-secondary mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-accent-success animate-fade-in">
            <Check size={18} />
            <span className="font-sans text-sm">Welcome to Velmora! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white border border-brand-gold/20 rounded-sm px-4 py-3.5 font-sans text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:border-brand-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-brand-gold text-surface-primary font-sans text-sm uppercase tracking-[0.12em] px-8 py-3.5 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 font-medium flex items-center justify-center gap-2"
            >
              <Send size={14} />
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-text-muted mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
