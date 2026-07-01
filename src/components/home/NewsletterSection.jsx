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
    <section className="py-16 sm:py-24 bg-velmora-base">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto mb-4" />
        <p className="text-velmora-stone-light text-sm mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="bg-velmora-charcoal/50 p-6">
            <p className="text-velmora-gold font-serif text-lg">Welcome to Velmora</p>
            <p className="text-velmora-stone-light text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-velmora-stone text-white px-4 py-3 text-sm placeholder:text-velmora-stone focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-base px-8 py-3 text-xs tracking-ultra-wide uppercase hover:bg-velmora-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
