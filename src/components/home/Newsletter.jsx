import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

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
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
        Join for 10% off your first order
      </h2>
      <p className="text-white/90 mb-8 max-w-xl mx-auto">
        Subscribe to receive exclusive offers, styling tips, and early access to new collections.
      </p>
      {isSubmitted ? (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <p className="text-white font-medium">Thank you for subscribing! Check your email for your 10% discount code.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
          />
          <Button
            type="submit"
            className="bg-charcoal-800 hover:bg-charcoal-700 text-white px-6 py-3 text-sm tracking-widest uppercase"
          >
            Subscribe
          </Button>
        </form>
      )}
      <p className="text-white/70 text-xs mt-4">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  );
};

export default Newsletter;
