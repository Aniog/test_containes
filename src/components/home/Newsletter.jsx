import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-h2 text-cream mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-cream/70 mb-8">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {isSubmitted ? (
            <div className="bg-gold/20 border border-gold/30 p-4 text-gold">
              <p className="font-sans text-sm uppercase tracking-widest">
                Thank you for subscribing!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none transition-colors"
                required
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-cream/50 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}