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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-manrope text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream tracking-wide mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-cream/50 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers. Unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-2xl font-light italic text-gold">
                Welcome to Velmora ✦
              </p>
              <p className="font-manrope text-xs text-cream/50 mt-2">
                Your 10% discount code is on its way to your inbox.
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
                className="flex-1 bg-transparent border border-white/20 text-cream placeholder:text-cream/30 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-manrope text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[11px] text-cream/25 mt-4">
            By subscribing you agree to our Privacy Policy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
