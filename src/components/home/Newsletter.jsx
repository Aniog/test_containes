import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-warm-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-display-sm md:text-[2.5rem] text-white mb-4 leading-tight">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-warm-400 text-sm mb-8 leading-relaxed">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>

          {status === 'success' ? (
            <div className="bg-gold/10 border border-gold/30 p-6 rounded">
              <p className="text-gold font-sans text-sm tracking-wide">
                Welcome to the Velmora family! Check your inbox for your exclusive code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-warm-800 border border-warm-700 text-white placeholder:text-warm-500 px-5 py-3.5 font-sans text-sm tracking-wide focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
