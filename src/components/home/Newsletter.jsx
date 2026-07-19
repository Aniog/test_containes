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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-content mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-black mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-velmora-black/70 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {subscribed ? (
          <div className="text-velmora-black font-medium">
            Thank you for subscribing!
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-velmora-black/10 border border-velmora-black/20 text-velmora-black placeholder:text-velmora-black/50 focus:outline-none focus:border-velmora-black"
              required
            />
            <Button 
              variant="primary" 
              className="bg-velmora-black text-velmora-white hover:bg-velmora-black/80"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-velmora-black/60 mt-4">
          By subscribing, you agree to receive marketing communications. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}