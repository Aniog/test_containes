import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-velvet-950">
      <div className="container-site max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-gold-500 font-sans font-medium mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="section-heading text-3xl md:text-4xl text-white mb-4">
          {submitted ? 'Welcome to the circle.' : '10% off your first order'}
        </h2>
        <p className="text-sm text-velvet-400 font-sans font-light mb-8 leading-relaxed">
          {submitted
            ? 'Check your inbox for your welcome gift. We\'re so glad you\'re here.'
            : 'Sign up for early access to new collections, exclusive offers, and a little bit of daily beauty in your inbox.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex items-center gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-velvet-700 text-white text-sm font-sans placeholder:text-velvet-500 focus:outline-none focus:border-gold-500 transition-colors rounded-l-sm"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-gold-500 text-velvet-950 hover:bg-gold-400 transition-colors rounded-r-sm"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {!submitted && (
          <p className="text-[11px] text-velvet-600 font-sans mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        )}
      </div>
    </section>
  );
}
