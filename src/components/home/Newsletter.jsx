import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing! Use code WELCOME10 for 10% off.');
    setEmail('');
  };

  return (
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest text-brand-goldLight mb-3">Stay in the loop</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-warm">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-brand-subtle">Be the first to know about new releases, exclusive offers, and styling inspiration.</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-brand-warm placeholder:text-brand-subtle focus:border-brand-gold focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-white hover:bg-brand-accentHover transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
