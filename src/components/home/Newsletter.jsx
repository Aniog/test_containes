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
        <h2
          className="text-3xl sm:text-4xl font-light mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Join for 10% Off
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Subscribe to our newsletter and receive exclusive offers, early access to new collections, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold bg-opacity-20 p-6 rounded">
            <p className="text-lg">Thank you for subscribing! 💎</p>
            <p className="text-sm text-gray-300 mt-2">Your discount code will be sent to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-velmora-gold focus:outline-none"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
