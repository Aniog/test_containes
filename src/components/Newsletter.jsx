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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-charcoal text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
        <div className="hairline w-24 mx-auto mb-6 border-velmora-charcoal-light" />
        <p className="text-lg mb-8 text-gray-300">
          Subscribe to receive 10% off your first order, plus exclusive access to new collections and styling tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold p-6">
            <p className="font-serif text-xl">Thank you for joining us!</p>
            <p className="mt-2 text-gray-300">Your discount code will arrive in your inbox shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 
                       focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 uppercase tracking-wider hover:bg-velmora-gold-dark 
                       transition-colors duration-300 font-sans text-sm"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}