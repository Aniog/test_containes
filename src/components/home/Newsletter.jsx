import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velmora-black text-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="text-velmora-warm-gray mb-8">
          Subscribe to our newsletter for exclusive offers and updates
        </p>

        {submitted ? (
          <p className="text-velmora-gold text-lg">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-transparent border border-gray-700 focus:border-white outline-none text-sm text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-velmora-black text-sm uppercase tracking-wider font-medium hover:bg-opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
