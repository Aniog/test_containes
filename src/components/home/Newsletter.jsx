import React from 'react';
import { useState } from 'react';

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-charcoal text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-light font-['Cormorant_Garamond'] mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-velmora-gold-light mb-8 tracking-wide">
          Get 10% off your first order plus exclusive access to new collections and private sales
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 p-6 rounded">
            <p className="font-['Cormorant_Garamond'] text-lg">
              Thank you for joining! Check your inbox for your discount code.
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
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-gold/50 text-white placeholder:text-velmora-gold-light/70 focus:outline-none focus:border-velmora-gold"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 hover:bg-velmora-gold-dark transition-colors tracking-wider text-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-gold-light/70 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
