import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

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
    <section className="py-20 bg-charcoal-900 text-cream-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <Mail size={40} className="mx-auto mb-6 text-gold-light" />
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="text-cream-200 mb-8 max-w-lg mx-auto">
          Subscribe to our newsletter and receive exclusive offers, early access to new collections, and jewelry care tips.
        </p>

        {submitted ? (
          <div className="bg-cream-50/10 rounded-sm p-6">
            <p className="text-gold-light font-medium">Thank you for subscribing!</p>
            <p className="text-sm text-cream-200 mt-2">Your 10% discount code will arrive in your inbox shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-cream-100/30 text-cream-50 placeholder:text-cream-300 focus:outline-none focus:border-gold-light transition-colors"
            />
            <button
              type="submit"
              className="btn-premium bg-gold text-charcoal-900 border-gold hover:bg-gold-light hover:border-gold-light"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-xs text-cream-300 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
