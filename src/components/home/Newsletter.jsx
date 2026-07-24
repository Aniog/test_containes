import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-cream">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
          Join the Family
        </h2>
        <p className="text-gray-600 mb-12 leading-relaxed">
          Subscribe to receive 10% off your first order, plus exclusive access to new
          collections and special offers.
        </p>

        {isSubmitted ? (
          <div className="bg-white p-8 rounded-lg">
            <p className="font-display text-2xl text-velmora-gold mb-2">Thank You!</p>
            <p className="text-gray-600">
              Your discount code will be sent to your email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-white border border-gray-200 focus:border-velmora-gold focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-velmora-black text-white px-8 py-4 text-sm tracking-[0.2em] hover:bg-velmora-charcoal transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
