import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold-500/30 rounded-full">
          <Mail className="w-6 h-6 text-gold-400" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-cream-100 tracking-wide mb-4">
          Join the Velmora Family
        </h2>

        <p className="font-sans text-sm text-cream-400 mb-2">
          Subscribe for 10% off your first order
        </p>

        <p className="font-sans text-xs text-cream-500 mb-8">
          Plus exclusive access to new arrivals, styling tips, and special offers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-500 font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {isSubmitted ? 'Thank You!' : 'Subscribe'}
            {!isSubmitted && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        {/* Privacy Note */}
        <p className="text-xs text-charcoal-600 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
