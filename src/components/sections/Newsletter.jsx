import { useState } from 'react';
import Button from '@/components/ui/Button';

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-[var(--color-accent)]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          {/* Icon */}
          <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
            <svg 
              className="w-full h-full text-white/80" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join the Velmora Family
          </h2>
          
          {/* Subtext */}
          <p className="font-sans text-base text-white/80 mb-8">
            Be the first to know about new collections, exclusive offers, and styling tips. Plus, get 10% off your first order.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-white/20 rounded-lg p-6">
              <p className="font-sans text-white text-lg">
                Welcome to the family!
              </p>
              <p className="font-sans text-sm text-white/70 mt-2">
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
                className="flex-1 px-5 py-3 font-sans text-sm bg-white text-[var(--color-dark)] placeholder:text-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-white"
                disabled={status === 'loading'}
              />
              <Button 
                type="submit" 
                variant="dark" 
                size="md"
                loading={status === 'loading'}
                className="whitespace-nowrap"
              >
                Get 10% Off
              </Button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="font-sans text-xs text-white/60 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
