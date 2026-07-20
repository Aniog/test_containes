import React, { useState } from 'react';

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
    <section className="py-20 lg:py-28 bg-velvet-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-overline text-gilded-400 mb-3">Stay in Touch</p>
          <h2 className="text-display text-white mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-body-lg text-velvet-300 mb-8">
            Be the first to know about new collections, exclusive offers, and styling tips.
          </p>

          {submitted ? (
            <div className="bg-gilded-700/20 border border-gilded-700/30 px-6 py-4">
              <p className="text-gilded-300 font-serif text-lg">
                Welcome to the Velmora family! Check your inbox for your discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 bg-velvet-800 border border-velvet-700 text-white placeholder:text-velvet-500 focus:outline-none focus:border-gilded-600 transition-colors text-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-velvet-500 mt-4">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
