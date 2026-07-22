import { useState } from 'react';
import Button from '../ui/Button';

const Newsletter = () => {
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
    <section className="py-section-mobile md:py-section bg-velmora-gold">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            Join for 10% Off
          </h2>
          <p className="mt-3 text-velmora-black/70">
            Subscribe to our newsletter and receive 10% off your first order. 
            Be the first to know about new collections and exclusive offers.
          </p>

          {isSubmitted ? (
            <div className="mt-6 p-4 bg-velmora-black text-velmora-gold">
              <p className="font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-velmora-cream border border-velmora-black/20 text-velmora-charcoal placeholder:text-velmora-gray focus:outline-none focus:border-velmora-black"
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="bg-velmora-black text-velmora-gold border-velmora-black hover:bg-velmora-charcoal"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-velmora-black/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;