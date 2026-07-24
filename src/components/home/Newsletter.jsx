import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section style={{ backgroundColor: 'var(--color-espresso)', color: 'var(--color-cream)' }}>
      <div className="container-luxury py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Join for 10% off your first order
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-sand)' }}>
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {status === 'success' ? (
            <div className="py-4">
              <p className="text-lg" style={{ color: 'var(--color-gold)' }}>
                Welcome to Velmora!
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--color-sand)' }}>
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 text-sm bg-transparent border text-white placeholder-white/50 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                style={{ borderColor: 'rgba(232, 226, 217, 0.3)' }}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3.5 text-sm font-medium tracking-wide transition-all whitespace-nowrap"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-espresso)',
                  opacity: status === 'submitting' ? 0.7 : 1
                }}
              >
                {status === 'submitting' ? 'Joining...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-xs mt-6" style={{ color: 'var(--color-taupe)' }}>
            By subscribing, you agree to receive marketing emails from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
