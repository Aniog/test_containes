import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useScrollPosition';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [ref, isVisible] = useIntersectionObserver();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
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
      ref={ref}
      className={`bg-gradient-to-b from-cream to-cream/80 py-16 md:py-24 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Newsletter</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warmblack mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-stone mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, and styling inspiration delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 input-field"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn-primary whitespace-nowrap"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Subscribing...
                </span>
              ) : status === 'success' ? (
                'Subscribed!'
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}>
              {message}
            </p>
          )}

          <p className="mt-6 text-xs text-stone/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
