import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }, 1000);
  };

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-gold-pale)' }}
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2
          className="font-serif text-3xl md:text-4xl mb-3"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
        >
          Join the Velmora World
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--color-walnut)' }}>
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {/* Success Message */}
        {status === 'success' ? (
          <div
            className="p-4 text-sm"
            style={{
              backgroundColor: 'var(--color-cream)',
              color: 'var(--color-espresso)',
            }}
          >
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-[var(--color-gold)]"
                style={{
                  backgroundColor: 'var(--color-cream)',
                  borderColor: 'var(--color-champagne)',
                  color: 'var(--color-espresso)',
                }}
                disabled={status === 'loading'}
              />
              {status === 'error' && (
                <p className="text-xs text-left mt-2" style={{ color: '#c53030' }}>
                  {message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 text-sm tracking-widest uppercase transition-all disabled:opacity-70"
              style={{
                backgroundColor: 'var(--color-charcoal)',
                color: 'var(--color-cream)',
              }}
            >
              {status === 'loading' ? 'Joining...' : 'Get 10% Off'}
            </button>
          </form>
        )}

        <p className="text-xs mt-4" style={{ color: 'var(--color-taupe)' }}>
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}