import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="py-20 lg:py-28 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/80 mb-10 text-sm">
          Be the first to know about new arrivals, exclusive offers, and styling notes.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white text-sm"
          />
          <button
            type="submit"
            className="bg-white text-velmora-gold px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velmora-cream transition-colors"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-5 text-white text-sm">Welcome. Check your inbox for your code.</p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
