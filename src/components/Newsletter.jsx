import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#2C2C2C] text-white">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl font-light mb-4">Join the Velmora Family</h2>
        <p className="text-[#9A8F87] mb-8 leading-relaxed">
          Subscribe to receive 10% off your first order, plus exclusive access to new collections and private sales.
        </p>

        {submitted ? (
          <div className="bg-[#C9A96E] text-white py-3 px-6 inline-block">
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
              className="flex-1 px-6 py-3 bg-transparent border border-[#9A8F87] text-white 
                         placeholder-[#9A8F87] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#C9A96E] text-white text-sm uppercase tracking-wider 
                         hover:bg-[#B8943E] transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
