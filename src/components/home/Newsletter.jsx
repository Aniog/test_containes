import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-warm-100 border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="max-w-xl mx-auto text-center">
          {submitted ? (
            <div className="animate-fade-in">
              <h3 className="font-serif text-2xl lg:text-3xl text-deep-900 font-light mb-4">
                Welcome to Velmora
              </h3>
              <p className="text-sm text-deep-500">Use code <span className="font-semibold text-accent-dark">VELMORA10</span> at checkout for 10% off your first order.</p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl lg:text-3xl text-deep-900 font-light mb-3">
                Join for 10% off your first order
              </h3>
              <p className="text-sm text-deep-500 mb-8">
                Sign up for early access to new collections, exclusive offers, and style inspiration.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3 text-sm bg-white border border-sand rounded-sm placeholder:text-deep-300 focus:outline-none focus:border-accent transition-colors"
                />
                <button type="submit" className="btn-primary text-xs tracking-widest whitespace-nowrap">
                  Sign Up
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
