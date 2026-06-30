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
    }, 800);
  };

  return (
    <section className="bg-velmora-gold/5 border-t border-b border-velmora-gold/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-velmora-espresso mb-3">
            Join for 10% off your first order
          </h2>
          <p className="text-velmora-warm-gray text-sm mb-8">
            Early access to new collections, exclusive offers, and styling inspiration — delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white border border-velmora-stone px-5 py-3 text-sm text-velmora-espresso placeholder:text-velmora-muted focus:outline-none focus:border-velmora-gold transition-colors rounded-sm"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap text-xs">
              {status === 'submitting' ? 'Sending…' : 'Sign Up'}
            </button>
          </form>

          {status === 'success' && (
            <p className="text-velmora-gold text-xs font-sans tracking-wider uppercase mt-4 animate-fade-in">
              Welcome — your code is on its way.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
