import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    // Simulate success
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-20 bg-charcoal">
      <div className="section-container">
        <div
          ref={ref}
          className={`max-w-xl mx-auto text-center ${isVisible ? 'animate-in' : 'opacity-0'}`}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ivory mb-4">
            Join for 10% off your first order
          </h2>
          <p className="font-sans text-sm text-warmGray-400 mb-8 leading-relaxed">
            Be the first to know about new arrivals, exclusive offers, and jewelry styling inspiration. We send emails twice a month, never more.
          </p>

          {status === 'success' ? (
            <div className="bg-gold/10 border border-gold/30 rounded px-6 py-4">
              <p className="font-serif text-lg text-gold italic">
                Welcome to the Velmora community. Check your inbox for your 10% code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border-b border-warmGray-600 text-ivory placeholder:text-warmGray-600
                             font-sans text-sm py-2 px-1 focus:outline-none focus:border-gold transition-colors duration-300"
                  aria-label="Email address"
                  required
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              {status === 'error' && (
                <p className="mt-2 font-sans text-xs text-red-400">
                  Please enter a valid email address.
                </p>
              )}
              <p className="mt-4 font-sans text-xs text-warmGray-600">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
