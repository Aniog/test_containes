import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <section className="newsletter-block py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-white mb-3">Join for 10% off your first order</h2>
        <p className="text-white/70 text-sm tracking-wide mb-8">
          Be the first to know about new arrivals, private sales, and stories from the atelier.
        </p>

        {submitted ? (
          <p className="text-[var(--velmora-gold-light)] py-4">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1"
              required
            />
            <Button type="submit" variant="primary">
              SUBSCRIBE
            </Button>
          </form>
        )}
        <p className="text-[10px] text-white/50 tracking-widest mt-4">WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.</p>
      </div>
    </section>
  );
};

export default Newsletter;
