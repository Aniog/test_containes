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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-light mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-velmora-text-light/50 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers. No spam, ever.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-px bg-velmora-gold mx-auto" />
              <p className="font-cormorant text-2xl text-velmora-gold italic">
                Welcome to Velmora
              </p>
              <p className="font-manrope text-xs text-velmora-text-light/50">
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
                className="flex-1 bg-velmora-charcoal border border-velmora-gold/20 text-velmora-text-light placeholder:text-velmora-text-light/30 font-manrope text-sm px-5 py-4 outline-none focus:border-velmora-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest-md uppercase px-7 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-velmora-text-light/25 mt-5">
            By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
