import React, { useState } from 'react';

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
    <section className="py-16 sm:py-24 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-sm text-warm-gray-light mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="py-8">
              <p className="font-serif text-xl text-cream mb-2">Welcome to the Velmora family.</p>
              <p className="text-sm text-warm-gray-light">Check your inbox for your 10% off code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3.5 bg-charcoal-light border border-warm-gray/30 text-cream placeholder:text-warm-gray text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-gold text-charcoal text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[10px] text-warm-gray mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
