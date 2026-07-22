import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

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
    <section className="py-20 md:py-32 bg-velmora-card">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-velmora-gold text-sm uppercase tracking-widest">Join the Club</span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mt-4 mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-velmora-muted mb-8">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-dark p-6 border border-velmora-gold/30">
              <p className="text-velmora-gold">Thank you for subscribing!</p>
              <p className="text-velmora-muted text-sm mt-2">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-velmora-muted text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;