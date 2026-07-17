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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-charcoal text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Join the Velmora Family
        </h2>
        <div className="elegant-divider w-24 mx-auto my-6 bg-velmora-gold" />
        <p className="text-lg mb-8 text-gray-300">
          Subscribe to receive 10% off your first order, plus exclusive access to
          new collections and private sales.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold p-4 rounded">
            <p className="font-serif text-lg">Thank you for joining us! ✨</p>
            <p className="text-sm mt-2 text-gray-300">Your discount code will arrive in your inbox shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-gray-600 focus:border-velmora-gold outline-none text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 tracking-wider text-sm hover:bg-velmora-gold-dark transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-sm text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;