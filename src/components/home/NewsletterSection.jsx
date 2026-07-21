import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--champagne-gold)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="w-12 h-px bg-[var(--ivory-cream)]/50 mx-auto mb-8" />

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl text-[var(--deep-espresso)] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join the Velmora World
          </h2>
          <p
            className="text-[var(--deep-espresso)]/80 mb-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Be the first to know about new collections, exclusive offers, and styling inspiration. 
            Plus, enjoy 10% off your first order.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 bg-[var(--ivory-cream)] text-[var(--deep-espresso)] placeholder:text-[var(--soft-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-espresso)]/20 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[var(--deep-espresso)] text-[var(--ivory-cream)] font-medium text-sm tracking-wider hover:bg-[var(--charcoal)] transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 text-[var(--deep-espresso)]">
              <Check className="w-5 h-5" />
              <p className="font-medium">Thank you for subscribing!</p>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-[var(--deep-espresso)]/60 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
