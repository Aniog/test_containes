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
    <section className="py-20 bg-velmora-charcoal text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
        <p className="text-gray-400 mb-2">Get 10% off your first order</p>
        <div className="w-16 h-px bg-velmora-gold mx-auto mb-8" />

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 p-6 rounded">
            <p className="font-serif text-lg">Thank you for joining!</p>
            <p className="text-sm text-gray-400 mt-2">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-nude text-white placeholder-gray-500 focus:outline-none focus:border-velmora-gold"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
