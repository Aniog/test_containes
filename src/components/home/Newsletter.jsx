import React, { useState } from 'react';

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
    <section className="bg-bronze-900">
      <div className="section-padding py-16 md:py-20 text-center max-w-xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-bronze-100 tracking-wide mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-sm text-bronze-400 mb-8 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-bronze-300 text-sm tracking-wider animate-fade-in">
            Thank you — check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-bronze-800 border border-bronze-700 text-bronze-100 text-sm placeholder:text-bronze-500 focus:outline-none focus:border-bronze-500 transition-colors"
            />
            <button type="submit" className="btn-accent !bg-bronze-500 !border-bronze-500 hover:!bg-bronze-400 hover:!border-bronze-400 text-xs whitespace-nowrap">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
