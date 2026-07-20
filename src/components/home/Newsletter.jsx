import React, { useState } from 'react';
import Button from '@/components/ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-white/80 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order and be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded text-white placeholder:text-white/50 font-sans text-sm focus:outline-none focus:border-white"
            />
            <Button 
              variant="secondary"
              className="bg-white text-gold hover:bg-ivory border-white whitespace-nowrap"
              type="submit"
            >
              Get 10% Off
            </Button>
          </form>
        ) : (
          <div className="text-white">
            <p className="font-serif text-xl mb-2">Welcome to Velmora!</p>
            <p className="font-sans text-white/80">Check your inbox for your exclusive discount code.</p>
          </div>
        )}

        <p className="font-sans text-xs text-white/60 mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
