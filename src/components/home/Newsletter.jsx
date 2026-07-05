import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-gold-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-4">
          Stay Connected
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-charcoal/60 mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive content.
        </p>

        {status === 'success' ? (
          <div className="bg-gold-100 border border-gold-300 rounded-lg p-6 animate-fade-in">
            <p className="font-serif text-xl text-charcoal italic mb-2">
              Welcome to the circle!
            </p>
            <p className="text-sm text-charcoal/60">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 bg-white border rounded text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors ${
                  error ? 'border-red-400' : 'border-charcoal/20'
                }`}
                disabled={status === 'loading'}
              />
              {error && (
                <p className="text-left text-xs text-red-500 mt-1">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-charcoal text-warmWhite text-sm tracking-extra-wide uppercase font-medium hover:bg-gold-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </>
              ) : (
                'Get 10% Off'
              )}
            </button>
          </form>
        )}

        <p className="text-xs text-charcoal/40 mt-4">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
