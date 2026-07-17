import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 2500);
    }
  };

  return (
    <section className="newsletter py-16 md:py-20">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">Join for 10% off</h2>
        <p className="text-white/70 text-sm mb-8 tracking-wide">
          Be the first to know about new arrivals and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-[var(--color-gold-light)] py-3">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input flex-1 bg-white/95 border-white/20 text-[var(--color-text)]"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-white/50 mt-4 tracking-[0.1em]">We respect your inbox.</p>
      </div>
    </section>
  );
};

export default Newsletter;
