import React from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-gold)]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Mail className="w-8 h-8 text-white/80 mx-auto mb-4" />
        <h2 className="serif-heading text-3xl md:text-4xl text-white mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/80 mb-8 text-sm">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <button type="submit" className="px-6 py-3 bg-white text-[var(--velmora-gold)] text-xs tracking-widest uppercase font-medium hover:bg-white/90 transition-colors">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-white/50 mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
