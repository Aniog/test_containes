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
      }, 2000);
    }
  };

  return (
    <section className="newsletter py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.15em] text-white/60 mb-3">MEMBERS ONLY</p>
        <h2 className="serif text-3xl md:text-4xl text-white tracking-tight mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-white/70 text-sm mb-8">
          Be the first to know about new collections, styling tips, and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-gold text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input flex-1 bg-white/95 border-white/30 text-bg-dark placeholder:text-text-muted"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        )}
        <p className="text-[10px] text-white/50 mt-4 tracking-widest">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;