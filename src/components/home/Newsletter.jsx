import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-20 bg-gold-500/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-600 mb-3">
          Newsletter
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-stone-950 mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-stone-500 mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-sans text-sm text-gold-600 font-medium">
              Thank you! Check your inbox for your welcome offer.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white border border-stone-200 rounded-none font-sans text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-stone-400 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
