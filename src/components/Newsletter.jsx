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
    <section className="py-20 bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl mb-4">Join the Velmora Family</h2>
        <p className="text-[#9A9590] mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive 10% off your first order. 
          Be the first to know about new collections, exclusive offers, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="max-w-md mx-auto">
            <p className="text-[#C9A96E] font-serif text-xl">Thank you for subscribing!</p>
            <p className="text-sm text-[#9A9590] mt-2">Check your email for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-[#3C3C3C] border border-[#4C4C4C] text-white placeholder-[#9A9590] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C9A96E] hover:bg-[#B8943E] text-white px-8 py-3 text-sm tracking-wider uppercase transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
