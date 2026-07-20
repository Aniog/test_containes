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
    <section className="newsletter-block py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif-custom text-3xl md:text-4xl text-white mb-3 tracking-[0.02em]">
          Join for 10% off your first order
        </h2>
        <p className="text-white/70 mb-8 text-sm tracking-wide">
          Be the first to know about new arrivals, private sales, and styling stories.
        </p>

        {submitted ? (
          <p className="text-white text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-3.5 text-sm focus:outline-none"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-white/50 mt-4 tracking-[0.08em]">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
