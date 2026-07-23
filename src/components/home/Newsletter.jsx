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
    <section className="py-section-mobile lg:py-section bg-velmora-gold">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-white">
            Join for 10% Off
          </h2>
          <p className="mt-4 text-velmora-white/80">
            Subscribe to our newsletter and receive 10% off your first order. 
            Be the first to know about new collections and exclusive offers.
          </p>

          {isSubmitted ? (
            <div className="mt-6 p-4 bg-velmora-white/10 border border-velmora-white/20">
              <p className="text-velmora-white font-medium">
                Thank you for subscribing! Check your email for your discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-velmora-white text-velmora-black placeholder-velmora-gray focus:outline-none focus:ring-2 focus:ring-velmora-white"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-velmora-white text-velmora-gold hover:bg-velmora-cream"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-velmora-white/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}