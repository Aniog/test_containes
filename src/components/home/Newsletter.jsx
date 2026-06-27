import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
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
    <section className="py-20 md:py-28 bg-[var(--color-gold)]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          {status === 'success' ? (
            <>
              <div className="text-white mb-4">
                <svg
                  className="w-12 h-12 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl md:text-3xl text-white mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Welcome to Velmora
              </h3>
              <p className="text-white/80">
                Check your inbox for your 10% off code.
              </p>
            </>
          ) : (
            <>
              <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-3">
                Stay Connected
              </p>
              <h3
                className="text-2xl md:text-3xl text-white mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Join for 10% off your first order
              </h3>
              <p className="text-white/70 text-sm mb-8">
                Plus, be the first to know about new collections, exclusive offers, and styling inspiration.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-white text-[var(--color-gold)] text-xs tracking-[0.15em] uppercase font-medium hover:bg-[var(--color-cream)] transition-colors disabled:opacity-70"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Now'}
                </button>
              </form>

              <p className="text-white/50 text-xs mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}