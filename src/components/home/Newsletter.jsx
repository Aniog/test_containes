import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Placeholder - would connect to real newsletter service
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <section className="newsletter-block py-16">
      <div className="container max-w-xl text-center">
        <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-light mb-2">The Velmora Journal</div>
        <h2 className="text-white mb-3">Join for 10% off your first order</h2>
        <p className="text-velmora-gold-light/80 text-sm mb-8">
          Receive stories, styling tips, and early access to new collections.
        </p>

        {submitted ? (
          <p className="text-velmora-gold-light text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1"
              required
            />
            <button type="submit" className="btn btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;