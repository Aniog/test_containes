import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-manrope text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-cream mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-cream/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration,
            and exclusive offers. No spam — ever.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-px bg-gold" />
              <p className="font-cormorant text-xl italic text-cream">
                Welcome to Velmora.
              </p>
              <p className="font-manrope text-xs text-cream/60">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-cream/30 mt-4">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
