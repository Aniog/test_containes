import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-velvet-surface to-velvet-elevated border border-velvet-border rounded p-8 md:p-12 text-center">
          {submitted ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-velvet-gold/20 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-velvet-gold" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-velvet-cream">
                You're on the list!
              </h3>
              <p className="text-velvet-taupe text-sm mt-2">
                Welcome to Velmora. Check your inbox for 10% off your first order.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl md:text-3xl text-velvet-cream">
                Join the Inner Circle
              </h3>
              <p className="text-velvet-taupe text-sm md:text-base mt-3 max-w-md mx-auto">
                Subscribe for 10% off your first order, early access to new collections, and exclusive styling inspiration.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 md:mt-8 max-w-sm mx-auto flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-velvet-deep border border-velvet-border rounded-full px-4 py-3 text-velvet-cream text-sm placeholder:text-velvet-muted focus:outline-none focus:border-velvet-gold transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary px-6 py-3"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-velvet-muted text-[10px] mt-3">
                No spam, unsubscribe anytime. By subscribing, you agree to our Privacy Policy.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}