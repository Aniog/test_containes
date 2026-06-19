import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-warm-black)]">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">
            Join for 10% Off
          </h2>
          <p className="font-sans text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Subscribe to our newsletter and receive 10% off your first order. Plus, be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="p-6 bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/30">
              <p className="font-sans text-white">
                Thank you for subscribing! Check your email for your discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 font-sans focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-[var(--color-gold)] text-white font-sans font-medium tracking-wide hover:bg-[var(--color-gold-dark)] transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="font-sans text-xs mt-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}