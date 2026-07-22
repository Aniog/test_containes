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
    <section className="newsletter py-16">
      <div className="container max-w-xl text-center">
        <h2 className="heading-serif text-3xl text-[var(--velmora-bg)] mb-3">Join for 10% off your first order</h2>
        <p className="text-[var(--velmora-bg)]/70 text-sm mb-8 tracking-wide">Be the first to know about new collections and exclusive offers.</p>

        {submitted ? (
          <p className="text-[var(--velmora-gold-light)] text-lg">Thank you. Welcome to the circle.</p>
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
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-[var(--velmora-bg)]/50 mt-4 tracking-[0.08em]">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
