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
    <section className="newsletter">
      <h3>Join for 10% off your first order</h3>
      <p>Be the first to know about new arrivals and exclusive offers.</p>
      
      {submitted ? (
        <p style={{ color: 'var(--color-gold-light)', fontSize: '1rem' }}>
          Thank you. Welcome to the circle.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            className="input"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;