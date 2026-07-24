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
    <section className="bg-velmora-gold py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs uppercase tracking-[0.25em] text-velmora-obsidian/60 mb-4">
          Exclusive Offer
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="font-inter text-sm text-velmora-obsidian/70 mb-10 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-2 border-velmora-obsidian/30 rounded-full flex items-center justify-center">
              <span className="text-velmora-obsidian text-xl">✓</span>
            </div>
            <p className="font-cormorant text-xl italic text-velmora-obsidian">
              Welcome to Velmora. Your code is on its way.
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
              className="flex-1 bg-velmora-obsidian/10 border border-velmora-obsidian/20 px-5 py-4 font-inter text-sm text-velmora-obsidian placeholder-velmora-obsidian/50 focus:outline-none focus:border-velmora-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-obsidian text-velmora-cream font-inter text-xs uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-inter text-[11px] text-velmora-obsidian/50 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
