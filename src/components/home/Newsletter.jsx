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
    <section className="py-20 md:py-28 bg-charcoal-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-cream-300 mb-10 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and the stories behind our pieces.
        </p>

        {submitted ? (
          <div className="bg-cream-50/10 border border-cream-200/20 p-6 max-w-md mx-auto">
            <p className="text-cream-50 font-medium">Welcome to Velmora.</p>
            <p className="text-cream-300 text-sm mt-1">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-cream-50/10 border border-cream-200/30 text-cream-50 placeholder-cream-400 focus:outline-none focus:border-gold-500 transition-colors text-sm"
            />
            <Button variant="accent" size="md" type="submit">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-warm-gray text-xs mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
