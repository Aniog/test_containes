import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome! Check your inbox for 10% off.');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 4000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-20 bg-accent/10 border-y border-surface-dark">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          {/* Content */}
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            Join the Velmora World
          </h2>
          <p className="font-sans text-text-secondary mb-8">
            Subscribe for 10% off your first order and be the first to know about new collections.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 h-12 px-4 bg-white border border-surface-dark rounded-md font-sans text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={status === 'loading'}
              disabled={status === 'success'}
              className={status === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              {status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>

          {/* Success Message */}
          {message && (
            <p className="mt-4 text-sm text-green-700 font-sans">
              {message}
            </p>
          )}

          {/* Privacy Note */}
          <p className="mt-4 text-xs text-text-muted font-sans">
            By subscribing, you agree to receive marketing emails from Velmora. 
            Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
