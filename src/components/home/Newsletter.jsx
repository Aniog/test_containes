import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velmora-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-[10px] uppercase tracking-widest-xl text-velmora-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-cream mb-4">
          Join for 10% Off
        </h2>
        <p className="font-manrope text-sm text-velmora-cream/60 leading-relaxed mb-10">
          Be the first to discover new collections, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border border-velmora-gold rounded-full flex items-center justify-center">
              <span className="text-velmora-gold text-lg">✓</span>
            </div>
            <p className="font-cormorant text-xl text-velmora-cream italic">
              Welcome to Velmora
            </p>
            <p className="font-manrope text-xs text-velmora-cream/60">
              Check your inbox for your 10% discount code.
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
              className="flex-1 bg-transparent border border-velmora-stone text-velmora-cream placeholder-velmora-text-muted font-manrope text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest-md px-8 py-4 hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-velmora-text-muted mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
