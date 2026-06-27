import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };
  
  return (
    <section className="py-20 md:py-28 bg-[var(--color-accent)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join the Velmora Community
          </h2>
          
          <p className="text-white/80 mb-8">
            Sign up for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          
          {status === 'success' ? (
            <div className="bg-white/20 rounded-[var(--radius-lg)] p-6">
              <p className="text-white font-medium mb-2">Thank you for subscribing!</p>
              <p className="text-white/70 text-sm">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-[var(--radius-md)] bg-white text-[var(--color-primary)] placeholder:text-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    error ? 'ring-2 ring-red-300' : ''
                  }`}
                  disabled={status === 'loading'}
                />
                {error && (
                  <p className="mt-2 text-sm text-white/90 text-left">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={status === 'loading'}
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="mt-6 text-xs text-white/60">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
