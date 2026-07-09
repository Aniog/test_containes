import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section id="journal" className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-4">
            Stay in Touch
          </p>
          <h2 className="font-serif text-heading-1 md:text-display text-white mb-4 text-balance">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-body text-white/60 mb-8">
            Be the first to know about new collections, exclusive offers, and styling tips.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-gold animate-fade-in">
              <Check size={18} />
              <span className="font-sans text-body">Welcome to the Velmora family.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-sans text-body focus:outline-none focus:border-gold/60 transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-gold text-xs flex-shrink-0"
              >
                <span className="sm:hidden">Subscribe</span>
                <ArrowRight size={18} className="hidden sm:block" />
              </button>
            </form>
          )}

          <p className="text-caption text-white/30 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
