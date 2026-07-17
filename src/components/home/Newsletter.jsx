import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [revealRef, revealed] = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section ref={revealRef} className={`py-20 md:py-28 bg-brand-espresso reveal-hidden ${revealed ? 'reveal-visible' : ''}`}>
      <div className="max-w-7xl mx-auto section-padding text-center">
        <h2 className="font-serif text-display-sm md:text-display text-white tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-brand-muted-light tracking-wide max-w-md mx-auto">
          Subscribe to our newsletter for early access to new collections, exclusive offers, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-brand-gold">Welcome to Velmora</p>
            <p className="font-sans text-xs text-brand-muted-light mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-white font-sans text-xs tracking-[0.12em] uppercase px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-brand-gold-dark transition-colors duration-300 active:scale-[0.98]"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
