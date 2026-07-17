import React, { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setEmail('');
    toast.success('Welcome to Velmora! Check your inbox for 10% off.');
  };

  return (
    <section className="bg-[var(--velmora-accent)] py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="velmora-heading text-3xl sm:text-4xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/60 mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="velmora-btn-primary bg-[var(--velmora-gold)] hover:bg-[var(--velmora-gold-light)] whitespace-nowrap disabled:opacity-50"
          >
            {isSubmitting ? 'Joining...' : 'Subscribe'}
          </button>
        </form>
        <p className="text-white/40 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
