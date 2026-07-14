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
    <section className="section-padding bg-[var(--color-accent)]">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          {/* Content */}
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-bg)] mb-4">
            Join the Velmora World
          </h2>
          <p className="text-[var(--color-bg)]/80 mb-8 max-w-md mx-auto">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-[var(--color-bg)]/10 p-6 animate-fade-in">
              <p className="text-[var(--color-bg)] font-medium">
                Welcome to Velmora!
              </p>
              <p className="text-[var(--color-bg)]/70 text-sm mt-2">
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
                className="flex-1 bg-[var(--color-bg)] text-[var(--color-text)] px-4 py-3 placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-bg)]"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[var(--color-bg)] text-[var(--color-accent)] font-medium px-6 py-3 transition-all duration-300 hover:bg-[var(--color-surface)] hover:shadow-lg disabled:opacity-70"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-[var(--color-bg)]/60 mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
