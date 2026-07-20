import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <Mail className="w-8 h-8 text-gold-400 mx-auto mb-4" />
          <p className="text-gold-400 text-xs tracking-mega-wide uppercase font-medium mb-3">
            Join the VELMORA Family
          </p>
          <h2 className="heading-serif text-2xl sm:text-3xl lg:text-4xl text-brand-100 font-light mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-charcoal-400 text-sm mb-8">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          {subscribed ? (
            <div className="bg-gold-600/10 border border-gold-500/30 rounded-sm py-4 px-6">
              <p className="text-gold-300 text-sm font-medium">
                Welcome to the VELMORA family! Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3.5 bg-charcoal-900 border border-charcoal-700 rounded-sm text-sm text-brand-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-gold-600 text-white text-xs tracking-ultra-wide uppercase font-semibold rounded-sm hover:bg-gold-700 transition-colors duration-300 flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[10px] text-charcoal-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
