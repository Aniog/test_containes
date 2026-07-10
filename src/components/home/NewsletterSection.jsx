import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-cream mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-velmora-cream/60 mb-8 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                <Check size={14} className="text-velmora-gold" strokeWidth={2} />
              </div>
              <p className="font-manrope text-sm text-velmora-cream">
                Welcome to Velmora. Your 10% code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-velmora-stone/50 text-velmora-cream placeholder-velmora-stone font-manrope text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-4 hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={12} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-manrope text-xs text-velmora-stone mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
