import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-20 bg-velmora-charcoal text-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-4">Join the Velmora Family</h2>
          <p className="text-velmora-stone mb-8">
            Subscribe to our newsletter and receive 10% off your first order, 
            plus exclusive access to new collections and special offers.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-gold/20 p-6 rounded-lg">
              <p className="text-lg font-medium">
                Thank you for subscribing! Check your email for your 10% discount code.
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
                className="flex-1 px-6 py-3 bg-velmora-charcoal/50 border border-velmora-stone/30 text-velmora-ivory placeholder-velmora-stone focus:outline-none focus:border-velmora-gold rounded-sm"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-gold text-velmora-ivory uppercase tracking-wider text-sm hover:bg-velmora-goldDark transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-velmora-stone mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
