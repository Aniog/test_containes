import { useState } from 'react';
import Button from '@/components/ui/Button';

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
    <section className="py-20 md:py-28 bg-velmora-gold/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Element */}
        <div className="w-12 h-px bg-velmora-gold mx-auto mb-6" />

        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
          Join the Velmora World
        </h2>
        <p className="text-velmora-taupe mt-4 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, exclusive access to new collections, 
          and styling inspiration delivered to your inbox.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white border border-velmora-sand rounded text-velmora-charcoal placeholder:text-velmora-taupe/60 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="bg-velmora-sand/30 p-6 rounded-lg max-w-md mx-auto">
            <p className="text-velmora-charcoal font-medium">
              Welcome to Velmora!
            </p>
            <p className="text-velmora-taupe text-sm mt-1">
              Check your inbox for your 10% off code.
            </p>
          </div>
        )}

        <p className="text-xs text-velmora-taupe mt-4">
          By subscribing, you agree to receive marketing emails from Velmora. 
          Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
