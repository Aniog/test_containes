import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

export function Newsletter() {
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
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
          Join for 10% Off
        </h2>
        <p className="text-espresso/80 mb-8">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-3 text-espresso">
            <Check className="w-5 h-5" />
            <span className="font-medium">You're in! Check your inbox for 10% off.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-ivory border-ivory focus:border-espresso"
                required
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              loading={status === 'loading'}
              className="bg-espresso text-ivory border-espresso hover:bg-espresso/90 whitespace-nowrap"
            >
              Get 10% Off
            </Button>
          </form>
        )}

        <p className="text-xs text-espresso/60 mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
