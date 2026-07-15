import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
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
    <section className="py-20 lg:py-28 bg-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="heading-serif text-3xl md:text-4xl text-white mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Join the Velmora Circle
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling inspiration. Get 10% off your first order.
        </p>

        {status === 'success' ? (
          <div className="text-white animate-fade-in">
            <p className="text-lg font-medium mb-2">Welcome to the circle!</p>
            <p className="text-white/70">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white"
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              size="lg"
              loading={status === 'loading'}
              className="border-white text-white hover:bg-white hover:text-gold whitespace-nowrap"
            >
              Get 10% Off
            </Button>
          </form>
        )}

        <p className="text-white/50 text-xs mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
