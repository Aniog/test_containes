import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
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
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-gradient-to-br from-velmora-gold/5 via-velmora-warm-white to-velmora-gold/5 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="font-sans text-caption uppercase tracking-mega-wide text-velmora-gold mb-3">
          Exclusive Access
        </p>
        <h2 className="font-serif text-heading-1 md:text-display text-velmora-charcoal mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-body-lg text-velmora-muted mb-8 max-w-lg mx-auto">
          Be the first to discover new collections, receive styling tips, and enjoy 
          exclusive offers reserved for our inner circle.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-10 h-10 bg-velmora-gold/10 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-velmora-gold" />
            </div>
            <p className="font-sans text-body text-velmora-charcoal">
              Welcome to the Velmora family! Check your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-velmora-cream border border-velmora-gold/20 text-velmora-charcoal placeholder:text-velmora-muted/50 font-sans text-body-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-caption text-velmora-muted/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
