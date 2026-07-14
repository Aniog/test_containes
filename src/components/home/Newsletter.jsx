import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-rich-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-champagne" />
          <span className="text-champagne text-xl">✦</span>
          <div className="w-12 h-px bg-champagne" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-warm-ivory mb-4">
          Join the Velmora World
        </h2>
        
        <p className="text-warm-gray-400 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, exclusive access to new collections, 
          and curated styling inspiration.
        </p>

        {status === 'success' ? (
          <div className="bg-champagne/10 border border-champagne/30 p-6">
            <p className="text-champagne font-medium mb-2">Welcome to Velmora!</p>
            <p className="text-warm-gray-400 text-sm">
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
                className="w-full px-4 py-3 bg-transparent border border-warm-gray-700 text-warm-ivory placeholder-warm-gray-500 text-sm focus:outline-none focus:border-champagne transition-colors"
                aria-label="Email address"
              />
              {error && (
                <p className="mt-2 text-xs text-red-400 text-left">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              variant="primary"
              loading={status === 'loading'}
              className="sm:flex-shrink-0"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-6 text-xs text-warm-gray-500">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default Newsletter;
