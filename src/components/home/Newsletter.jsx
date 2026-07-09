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
    <section className="bg-[#1a1a1a] text-white py-16 md:py-20">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">Join for 10% Off</h2>
        <p className="text-sm text-gray-400 mb-8 tracking-wider uppercase">
          Your first order, plus early access to new collections
        </p>
        {submitted ? (
          <div className="animate-fade-in">
            <p className="text-[#c9a96e] serif-heading text-xl mb-2">Welcome to Velmora</p>
            <p className="text-sm text-gray-400">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-gray-600 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
