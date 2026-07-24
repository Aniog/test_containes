import React, { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Welcome! Check your inbox for 10% off.');
      setEmail('');
      setSubmitting(false);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-accent-gold">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-deep mb-4">
            Join the Inner Circle
          </h2>
          <p className="font-sans text-sm text-deep/80 mb-8">
            Subscribe for early access to new collections, styling tips, and 10% off your first order.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-cream text-text-primary placeholder:text-text-secondary/60 font-sans text-sm px-5 py-3.5 border-0 focus:outline-none focus:ring-2 focus:ring-deep/20"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-deep text-cream font-sans text-xs uppercase tracking-widest px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-deep/90 transition-colors disabled:opacity-70"
            >
              {submitting ? 'Subscribing...' : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
