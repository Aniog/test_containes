import React, { useState } from 'react';

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
    <section className="newsletter py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">Join for 10% off</h2>
        <p className="text-white/70 mb-8">Be the first to know about new arrivals and exclusive offers.</p>

        {submitted ? (
          <p className="text-[var(--color-gold-light)] text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 text-sm"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-white/50 mt-4 tracking-widest">WE RESPECT YOUR INBOX</p>
      </div>
    </section>
  );
};

export default Newsletter;
