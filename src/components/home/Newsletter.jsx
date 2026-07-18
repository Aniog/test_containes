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
      <div className="container">
        <h3>Join for 10% off your first order</h3>
        <p>Be the first to know about new arrivals and exclusive offers.</p>
        
        {submitted ? (
          <p style={{ color: '#d4b99a', fontSize: '1rem' }}>
            Thank you. Welcome to the circle.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
