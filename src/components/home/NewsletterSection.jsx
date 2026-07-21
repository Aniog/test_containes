import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#2c2825] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 mx-auto mb-6 text-[#d4a853]" />
        <h2 className="velmora-heading text-3xl sm:text-4xl tracking-[0.1em] mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          Subscribe to receive exclusive access to new collections, styling tips, and a special discount on your first order.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-[#3d3835] border border-[#4a4542] text-white placeholder-[#6b6560] text-sm focus:outline-none focus:border-[#d4a853] transition-colors"
          />
          <button type="submit" className="bg-[#d4a853] text-white px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-[#b8860b] transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-white/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
