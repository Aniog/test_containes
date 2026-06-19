import React, { useState } from 'react';

export default function NewsletterSection() {
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
    <section className="py-16 md:py-24 bg-[#0f0f0f]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="velmora-heading text-3xl md:text-4xl text-[#faf8f5] mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-[#6b6b6b] mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="text-[#c9a96e] velmora-heading text-lg">
            Welcome to Velmora! Check your inbox for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-[#2a2a2a] text-[#faf8f5] text-sm placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#c9a96e] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#c9a96e] text-[#1a1a1a] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#b8944f] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
