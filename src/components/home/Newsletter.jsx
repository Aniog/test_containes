import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-400 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className="animate-on-scroll">
          <p className="text-xs tracking-mega-wide uppercase text-gold-400 font-medium mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory-50 font-light mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-sm text-charcoal-400 mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="bg-gold-500/10 border border-gold-500/20 rounded-sm px-6 py-4">
              <p className="text-gold-300 text-sm font-medium">
                Welcome to Velmora! Check your inbox for your exclusive 10% code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-charcoal-800 border border-charcoal-700 text-ivory-100 text-sm placeholder-charcoal-500
                  focus:outline-none focus:border-gold-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-gold-500 text-white text-xs tracking-widest uppercase font-semibold 
                  hover:bg-gold-600 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[11px] text-charcoal-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
