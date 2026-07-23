import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing! Use code WELCOME10 for 10% off.');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-base text-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-4">Stay in the loop</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% off your first order</h2>
          <p className="text-sm text-surface/70 mb-8">
            Be the first to know about new drops, exclusive offers, and the stories behind our pieces.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-surface/30 px-4 py-3 text-sm text-surface placeholder:text-surface/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="btn-primary bg-accent text-ink hover:bg-accent-light">
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-surface/50 mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
