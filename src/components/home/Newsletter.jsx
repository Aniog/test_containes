import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 tracking-wide mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-charcoal-800 text-sm mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        {status === 'success' ? (
          <p className="font-serif text-lg text-charcoal-950">
            Welcome to the circle. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-charcoal-950/10 border border-charcoal-950/20 text-charcoal-950 placeholder-charcoal-700 text-sm focus:outline-none focus:border-charcoal-950/40"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
