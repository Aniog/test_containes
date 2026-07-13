import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-sand">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold-muted mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary leading-[1.15] mb-4">
          10% off your<br />
          <em className="italic">first order</em>
        </h2>
        <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed mb-10 max-w-sm mx-auto">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-velmora-gold mx-auto mb-5" />
            <p className="font-serif text-xl text-velmora-text-primary">
              Welcome to Velmora.
            </p>
            <p className="font-sans text-sm text-velmora-text-muted mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-velmora-cream border border-velmora-stone/30 px-5 py-4 font-sans text-sm text-velmora-text-primary placeholder:text-velmora-text-muted focus:outline-none focus:border-velmora-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-velmora-text-muted mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
