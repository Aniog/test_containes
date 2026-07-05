import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--color-charcoal)] text-white">
      <div className="container-wide text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">Join the Family</p>
        <h2 className="serif-heading text-4xl md:text-5xl mb-4">Get 10% Off Your First Order</h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          Subscribe for exclusive access to new collections, styling tips, and members-only offers.
        </p>
        
        {submitted ? (
          <div className="text-[var(--color-gold)] serif-heading text-2xl">
            Welcome to Velmora! Check your inbox for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              required
            />
            <button type="submit" className="bg-[var(--color-gold)] text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-[var(--color-gold-dark)] transition-colors">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
