import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--color-gold-light)]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-[var(--color-text-secondary)] mb-8">
            Subscribe to our newsletter and receive 10% off your first order. 
            Plus, be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="bg-[var(--color-warm-white)] p-4 text-[var(--color-charcoal)] font-sans">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button 
                type="submit" 
                variant="primary"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}

          <p className="font-sans text-xs text-[var(--color-text-muted)] mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;