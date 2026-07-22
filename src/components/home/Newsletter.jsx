import React, { useState } from 'react';
import { useScrollReveal } from '../../lib/hooks';

export default function Newsletter() {
  const { ref, isVisible } = useScrollReveal();
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
    <section ref={ref} className="relative py-section-mobile md:py-section bg-gold overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/20 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div
          className={`max-w-xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-serif text-white text-3xl md:text-4xl mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/80 font-sans text-base leading-relaxed mb-8">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-sm p-6">
              <p className="text-white font-sans font-medium text-lg">
                Thank you for joining us!
              </p>
              <p className="text-white/80 font-sans text-sm mt-2">
                Check your inbox for your exclusive discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 bg-white/95 text-charcoal font-sans text-sm placeholder-stone rounded-btn focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-charcoal text-white text-btn uppercase tracking-btn font-sans font-medium hover:bg-espresso transition-colors duration-200 rounded-btn whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/50 font-sans text-xs mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
