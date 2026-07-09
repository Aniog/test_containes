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
    <div className="newsletter-block py-12 md:py-16">
      <div className="container text-center max-w-md">
        <h3 className="text-2xl mb-2 text-[var(--velmora-bg)]">Join for 10% off your first order</h3>
        <p className="text-sm opacity-70 mb-6">Be the first to know about new arrivals and exclusive offers.</p>
        
        {submitted ? (
          <p className="text-[var(--velmora-gold)] py-2">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;