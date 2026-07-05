import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#2C2622]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20 text-center">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
          Join the Velmora Circle
        </p>
        <h2
          className="text-2xl md:text-3xl text-[#FAF7F2] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          10% Off Your First Order
        </h2>
        <p className="text-sm text-[#B8ADA0] mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-[#C9A84C] text-sm tracking-wide">
            Welcome to the circle. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-[#3D332C] border border-[#4A3F37] text-[#FAF7F2] placeholder-[#8A7F74] px-5 py-3 text-sm rounded-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C9A84C] text-[#2C2622] px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-[#E8DFD5] transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
