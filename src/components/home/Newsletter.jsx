import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome! Check your inbox for 10% off.');
      setEmail('');
    }, 1000);
  };
  
  return (
    <section className="py-16 md:py-20 bg-[var(--color-gold)]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          {/* Icon */}
          <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[var(--color-cream)]/20 flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-[var(--color-cream)]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </div>
          
          {/* Heading */}
          <h2 
            className="font-serif text-2xl md:text-3xl text-[var(--color-rich-black)] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join the Velmora Circle
          </h2>
          
          <p className="text-sm md:text-base text-[var(--color-rich-black)]/70 mb-6">
            Subscribe for 10% off your first order and be the first to know about new collections, 
            exclusive offers, and styling inspiration.
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email"
                className={`
                  w-full px-4 py-3 bg-[var(--color-cream)] rounded-sm
                  text-[var(--color-charcoal)] placeholder:text-[var(--color-warm-gray)]
                  border-2 transition-colors
                  ${status === 'error' ? 'border-[var(--color-error)]' : 'border-transparent'}
                  focus:outline-none focus:border-[var(--color-charcoal)]
                `}
                disabled={status === 'loading' || status === 'success'}
              />
            </div>
            
            <Button 
              type="submit" 
              variant="primary"
              size="md"
              loading={status === 'loading'}
              disabled={status === 'success'}
            >
              {status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>
          
          {/* Status Message */}
          {message && (
            <p className={`
              mt-3 text-sm
              ${status === 'error' ? 'text-[var(--color-error)]' : ''}
              ${status === 'success' ? 'text-[var(--color-rich-black)]' : ''}
            `}>
              {message}
            </p>
          )}
          
          {/* Privacy note */}
          <p className="mt-4 text-xs text-[var(--color-rich-black)]/60">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
