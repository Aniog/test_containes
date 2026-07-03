import { useState } from 'react';
import Button from '../ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setMessage('Thank you! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="py-20 sm:py-24 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white">
          Join for 10% Off
        </h2>
        <p className="mt-4 font-sans text-sm text-white/80 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`flex-1 px-5 py-3 bg-white text-charcoal font-sans text-sm
                         placeholder:text-softGray focus:outline-none focus:ring-2 
                         focus:ring-charcoal/20 transition-all
                         ${status === 'error' ? 'ring-2 ring-red-500' : ''}`}
              disabled={status === 'loading' || status === 'success'}
            />
            <Button
              type="submit"
              variant="secondary"
              size="md"
              disabled={status === 'loading' || status === 'success'}
              className="bg-charcoal text-warm-white border-charcoal hover:bg-charcoal/90 whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>

          {message && (
            <p className={`mt-4 font-sans text-sm ${
              status === 'error' ? 'text-red-100' : 'text-white/90'
            }`}>
              {message}
            </p>
          )}
        </form>

        <p className="mt-6 font-sans text-xs text-white/60">
          By subscribing, you agree to receive marketing emails from Velmora.
          Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
