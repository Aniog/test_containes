import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
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

    setStatus('loading');
    setError('');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {status === 'success' ? (
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-espresso/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-espresso" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-4">
                Welcome to Velmora
              </h3>
              <p className="text-espresso/80">
                Check your inbox for your 10% off code. We can't wait to have you!
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-4">
                Join the Velmora World
              </h2>
              <p className="text-espresso/80 mb-8">
                Be the first to know about new collections, exclusive offers, and styling inspiration. 
                Plus, get 10% off your first order.
              </p>

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
                    className={`w-full px-4 py-3 bg-ivory text-espresso placeholder:text-cocoa/50 border-0 focus:outline-none focus:ring-2 focus:ring-espresso/20 ${
                      error ? 'ring-2 ring-red-500' : ''
                    }`}
                  />
                  {error && (
                    <p className="text-red-700 text-sm mt-1 text-left">{error}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-espresso text-ivory hover:bg-espresso/90 border-espresso whitespace-nowrap"
                  loading={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-espresso/60 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
