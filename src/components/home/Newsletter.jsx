import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--color-gold-primary)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-6 inline-block">
            <p className="text-white font-serif text-lg">
              {message}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-4 bg-white text-[var(--color-text-primary)] font-sans text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-white/50"
                disabled={status === 'submitting'}
              />
              {status === 'error' && (
                <p className="absolute -bottom-6 left-0 text-xs text-white/90">
                  {message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-4 bg-[var(--color-text-primary)] text-white font-sans text-sm tracking-wider hover:bg-[var(--color-text-secondary)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-xs text-white/60 mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
