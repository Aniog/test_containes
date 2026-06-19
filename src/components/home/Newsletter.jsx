import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 md:py-28 bg-accent">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wider mb-4">
          Join for 10% off
        </h2>
        <p className="text-white/80 mb-8">
          Subscribe to receive exclusive offers, new arrivals, and styling inspiration.
        </p>

        {status === 'success' ? (
          <p className="text-white font-medium">
            Thank you! Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
            />
            <Button
              type="submit"
              variant="secondary"
              size="md"
              loading={status === 'loading'}
              className="bg-white text-accent hover:bg-white/90 border-white whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-white/50 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
