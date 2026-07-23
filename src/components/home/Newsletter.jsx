import React, { useState } from 'react';

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
      }, 2500);
    }
  };

  return (
    <section className="newsletter py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-white tracking-[0.05em] mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-white/70 text-sm mb-8 tracking-wide">
          Be the first to know about new arrivals and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-[#B89778] py-3">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1"
            />
            <button type="submit" className="btn btn-gold border-white text-white hover:bg-white hover:text-[#2C2824]">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;