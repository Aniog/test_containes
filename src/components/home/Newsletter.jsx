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
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Join for 10% Off</h2>
        <p className="text-white/70 mb-8 text-sm">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
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
              className="velmora-input flex-1"
              required
            />
            <button type="submit" className="velmora-btn velmora-btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-white/50 text-xs mt-4">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
