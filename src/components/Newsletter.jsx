import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-section lg:py-section-lg">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-charcoal p-12 md:p-16 lg:p-20">
          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-serif text-3xl md:text-4xl text-white mb-4">You're In!</p>
              <p className="font-sans text-sm text-white/70">
                Welcome to the Velmora world. Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-4">Exclusive Access</p>
              <h2 className="font-serif text-heading-md text-white mb-4">
                Join for 10% Off Your First Order
              </h2>
              <p className="font-sans text-sm text-white/60 mb-8 max-w-sm mx-auto">
                Be the first to know about new collections, behind-the-scenes stories, and members-only offers.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-transparent border border-white/20 text-white px-5 py-4 font-sans text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 text-xs whitespace-nowrap"
                >
                  Subscribe <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}