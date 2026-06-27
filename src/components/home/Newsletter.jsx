import { useState } from 'react';
import Button from '@/components/ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold">
          Join the List
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-cream mt-3 mb-4">
          Get 10% off your first order
        </h2>
        <p className="text-sm md:text-base text-velmora-cream/70 max-w-md mx-auto mb-8">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="bg-velmora-charcoal p-6 rounded-sm max-w-md mx-auto">
            <p className="font-serif text-lg text-velmora-cream">
              Welcome to Velmora.
            </p>
            <p className="text-sm text-velmora-cream/70 mt-2">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-velmora-charcoal border border-velmora-cream/20 text-velmora-cream placeholder:text-velmora-cream/40 text-sm focus:outline-none focus:border-velmora-gold transition-colors duration-300"
            />
            <Button variant="accent" size="md" type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-[11px] text-velmora-cream/40 mt-4">
          By signing up, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
