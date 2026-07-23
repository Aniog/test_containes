import React, { useState } from 'react';

export default function Newsletter() {
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
    <section className="py-20 bg-velmora-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl mb-4">Join the Velmora Family</h2>
        <p className="text-velmora-warm-gray mb-8 tracking-wide">
          Sign up for 10% off your first order, plus exclusive access to new collections and styling tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold text-white px-6 py-3 inline-block">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white 
                       placeholder-gray-500 focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 uppercase tracking-wider text-sm 
                       hover:bg-velmora-gold-dark transition-colors whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
