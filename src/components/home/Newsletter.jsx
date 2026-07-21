import { useState } from 'react';
import Button from '@/components/ui/Button';

const Newsletter = () => {
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
    
    setStatus('loading');
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };
  
  return (
    <section className="bg-[var(--color-gold)] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-bg-primary)] mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-[var(--color-bg-primary)] opacity-80 mb-8">
            Subscribe for 10% off your first order, exclusive early access to new collections, and curated styling inspiration.
          </p>
          
          {status === 'success' ? (
            <div className="bg-[var(--color-bg-primary)]/10 p-6 rounded-sm">
              <svg 
                className="w-12 h-12 text-[var(--color-bg-primary)] mx-auto mb-3" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-bg-primary)] font-medium">
                Welcome to the circle!
              </p>
              <p className="text-[var(--color-bg-primary)] opacity-70 text-sm mt-1">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] border-0 focus:ring-2 focus:ring-[var(--color-bg-primary)] focus:outline-none"
                  disabled={status === 'loading'}
                />
                {error && (
                  <p className="text-[var(--color-bg-primary)] text-xs mt-1 text-left">
                    {error}
                  </p>
                )}
              </div>
              <Button 
                type="submit" 
                variant="dark"
                isLoading={status === 'loading'}
                className="flex-shrink-0"
              >
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-xs text-[var(--color-bg-primary)] opacity-60 mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
