import React, { useState } from 'react';
import Button from '../ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <section className="newsletter py-16">
      <div className="container max-w-xl text-center">
        <h2 className="font-serif text-2xl text-white mb-2">Join for 10% off your first order</h2>
        <p className="text-white/70 text-sm mb-8 tracking-wide">
          Be the first to know about new collections and private releases.
        </p>

        {submitted ? (
          <p className="text-[#D4B99A] text-sm tracking-[0.06em] uppercase">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              className="input flex-1"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" variant="gold" className="border-white text-white hover:bg-white hover:text-[#2C2825]">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;