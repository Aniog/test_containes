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
    <section className="py-20 bg-[#2A2420] text-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
        <p className="text-gray-300 mb-8 tracking-wide">
          Subscribe to our newsletter and receive 10% off your first order
        </p>

        {submitted ? (
          <div className="bg-green-900 bg-opacity-30 p-6 rounded">
            <p className="text-lg">Thank you for subscribing! Check your email for your discount code.</p>
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
                         focus:outline-none focus:border-[#B8860B] transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#B8860B] text-white hover:bg-[#C8960B] transition-colors 
                         text-sm uppercase tracking-wider font-medium whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}
