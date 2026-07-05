import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Join for 10% off your first order</h2>
          <p className="mt-3 text-stone-400 text-sm md:text-base">
            Be the first to know about new arrivals, exclusive offers, and journal stories.
          </p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-stone-500 px-4 py-3 rounded-full text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-hover text-white px-6 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Subscribe
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-sm text-gold">Welcome to Velmora. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
