import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-gold-500">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-white/90 mb-8">
          Subscribe for early access to new arrivals, styling notes, and a welcome gift on your first order.
        </p>
        {submitted ? (
          <p className="font-sans text-white text-lg">Thank you. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-4 bg-white text-stone-900 placeholder:text-stone-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-stone-900 text-white font-sans text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
