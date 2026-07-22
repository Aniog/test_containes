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
    <section className="py-16 md:py-24 bg-goldLight">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-h2 mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-warmGray mb-8">
          Subscribe to receive 10% off your first order, early access to new collections, and exclusive offers.
        </p>

        {isSubmitted ? (
          <div className="bg-cream p-6 animate-fadeIn">
            <p className="font-serif text-lg text-charcoal">
              Thank you for subscribing!
            </p>
            <p className="text-sm text-warmGray mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border bg-cream focus:border-gold focus:outline-none transition-colors"
              required
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-muted mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}