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
    <section className="py-20 bg-[#C9A96E]">
      <div className="container-luxury max-w-2xl text-center">
        <h2 className="font-serif text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/90 mb-8 tracking-wide">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded p-6">
            <p className="text-white font-serif text-lg">
              Thank you for subscribing! Check your email for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-[#2C2C2C] text-white px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-black transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
