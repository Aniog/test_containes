import React, { useState } from 'react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
    toast.success('Welcome to Velmora! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 bg-[var(--velmora-text)] text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/70 mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-[var(--velmora-gold)] font-serif text-lg">
            Welcome to the Velmora family. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--velmora-gold)] transition-colors"
              required
            />
            <button type="submit" className="bg-[var(--velmora-accent)] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[var(--velmora-accent-hover)] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
