import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-espresso">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <p className="font-inter text-xs tracking-widest uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-4">
          10% off your first order
        </h2>
        <p className="font-inter text-sm text-cream-muted leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-px bg-gold mx-auto mb-4" />
            <p className="font-cormorant text-2xl font-light text-cream italic">
              Welcome to Velmora
            </p>
            <p className="font-inter text-xs text-cream-muted tracking-wide">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-stone/40 text-cream placeholder-cream-muted/50 font-inter text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-inter text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-cream-muted/40 mt-5 tracking-wide">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
