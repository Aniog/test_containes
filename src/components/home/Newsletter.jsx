import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-velmora-charcoal text-velmora-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-velmora-gold mb-3">Newsletter</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-velmora-taupe">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-white/5 rounded-sm border border-white/10">
            <p className="text-sm font-medium">Thank you for subscribing!</p>
            <p className="text-xs text-velmora-taupe mt-1">Your discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-velmora-taupe px-4 py-3 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-white hover:text-velmora-charcoal transition-all duration-300"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="text-[10px] text-velmora-warmgray mt-4 tracking-wide">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
