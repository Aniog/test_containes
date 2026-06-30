import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-charcoal-900">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          {submitted ? (
            <>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-4">
                Welcome to Velmora
              </h3>
              <p className="text-charcoal-300">
                Check your inbox for your 10% off code. We can't wait to share our story with you.
              </p>
            </>
          ) : (
            <>
              <span className="text-[11px] uppercase tracking-[0.25em] text-accent mb-4 block">
                Stay Connected
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-4">
                Join for 10% off your first order
              </h2>
              <p className="text-charcoal-300 mb-8 max-w-md mx-auto">
                Be the first to know about new collections, exclusive offers, 
                and the stories behind our jewelry.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 bg-charcoal-800 border border-charcoal-700 text-cream-50 placeholder:text-charcoal-500 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-accent text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-gold-600 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-charcoal-500 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
