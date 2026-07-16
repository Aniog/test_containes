import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-4">Exclusive Access</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory tracking-wide mb-3">
            Join the Inner Circle
          </h2>
          <p className="font-inter text-sm text-ivory/50 leading-relaxed mb-8">
            Subscribe for 10% off your first order, early access to new collections, and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-gold" />
              </div>
              <p className="font-cormorant text-xl text-ivory italic">
                Welcome to Velmora. Your 10% code is on its way.
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
                className="flex-1 bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/30 font-inter text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-inter text-[11px] uppercase tracking-[0.14em] px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-ivory/25 mt-4 tracking-wide">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
