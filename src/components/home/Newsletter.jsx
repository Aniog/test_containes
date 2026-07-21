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
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-[#2A2520]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-[#FAF8F5] mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-[#E8E0D8] mb-2 text-lg">
          Get 10% off your first order
        </p>
        <p className="text-[#6B5E54] text-sm mb-10">
          Plus exclusive access to new collections, styling tips, and member-only offers.
        </p>

        {isSubmitted ? (
          <div className="bg-[#8B7355] text-[#FAF8F5] p-6 rounded-sm">
            <p className="font-serif text-lg">Thank you for joining!</p>
            <p className="text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-[#FAF8F5] text-[#2A2520] placeholder-[#6B5E54] focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm"
            />
            <button
              type="submit"
              className="bg-[#8B7355] text-[#FAF8F5] px-10 py-4 text-sm tracking-wider uppercase hover:bg-[#6B5640] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-[#6B5E54] mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
