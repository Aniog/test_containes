import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-velmora-charcoal text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Join the Velmora Family
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto mb-8" />
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive 10% off your first order.
          Be the first to discover new collections and exclusive offers.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold text-white px-8 py-4 inline-block">
            <p className="text-sm tracking-wider uppercase">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-sm text-gray-400 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
