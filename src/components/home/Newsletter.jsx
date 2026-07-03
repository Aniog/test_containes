import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
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
    <section className="py-20 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-velmora-taupe">
            Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
          </p>
          
          {subscribed ? (
            <div className="mt-8 p-6 bg-velmora-gold/20 border border-velmora-gold/30">
              <p className="text-velmora-gold font-serif text-xl">
                Thank you for subscribing!
              </p>
              <p className="text-velmora-taupe text-sm mt-2">
                Check your email for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-transparent border border-velmora-taupe/50 text-velmora-cream placeholder-velmora-taupe focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <Button type="submit" variant="accent" size="lg">
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="mt-4 text-xs text-velmora-taupe">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}