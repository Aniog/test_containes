import { useState } from 'react';

export default function Newsletter() {
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
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {status === 'success' ? (
          <div className="animate-fade-in">
            <h3 className="font-serif text-2xl md:text-3xl text-cream">
              Welcome to Velmora
            </h3>
            <p className="mt-4 text-cream/70 font-sans">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-2xl md:text-3xl text-cream">
              Join for 10% off your first order
            </h3>
            <p className="mt-3 text-sm text-cream/60 font-sans">
              Plus early access to new collections and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 font-sans text-sm focus:outline-none focus:border-cream/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-3 bg-cream text-charcoal font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-champagne disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-cream/40 font-sans">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
