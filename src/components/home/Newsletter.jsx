import React, { useState } from 'react';
import Button from '../ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <section className="newsletter py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="heading-serif text-3xl md:text-4xl text-white mb-3 tracking-[-0.01em]">
          Join for 10% off your first order
        </h2>
        <p className="text-white/70 mb-8 text-sm tracking-wide">
          Be the first to know about new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-[var(--color-gold-light)] text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 text-[var(--color-text)] text-sm"
              required
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        )}
        <p className="text-[10px] text-white/50 mt-4 tracking-widest">WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.</p>
      </div>
    </section>
  );
};

export default Newsletter;
