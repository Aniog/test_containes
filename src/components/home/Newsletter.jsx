import { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

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
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join the Velmora Circle
          </h2>
          <p className="font-sans text-white/70 mb-8">
            Subscribe to receive 10% off your first order and be the first to know about new collections.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-gold/20 border border-velmora-gold/30 p-4">
              <p className="font-sans text-velmora-gold">
                Thank you for subscribing! Check your email for your discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/50"
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          )}

          <p className="font-sans text-xs text-white/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;