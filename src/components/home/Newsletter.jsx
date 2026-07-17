import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="max-w-xl mx-auto text-center">
          <span className="font-sans text-xs uppercase tracking-widest text-gold">
            Stay in the Loop
          </span>
          <h2 className="font-serif text-3xl md:text-h2 text-cream mt-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-stone-400 font-sans">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {subscribed ? (
            <div className="mt-8 p-4 bg-success/20 border border-success/30">
              <p className="text-cream font-sans">Thank you for subscribing! Check your email for your discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-stone-800 border-stone-700 text-cream placeholder:text-stone-500"
              />
              <Button 
                type="submit" 
                variant="primary"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-stone-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}