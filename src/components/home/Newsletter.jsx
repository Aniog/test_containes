import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-gold-600">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/80 text-sm mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>
        {status === 'success' ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-sm p-6">
            <p className="font-serif text-xl text-white">Welcome to Velmora</p>
            <p className="text-white/80 text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white/60 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3 bg-charcoal-950 text-white text-xs tracking-widest-xl uppercase font-medium hover:bg-charcoal-800 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
