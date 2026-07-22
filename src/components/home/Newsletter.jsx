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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-manrope text-xs tracking-[0.18em] uppercase text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-parchment tracking-wide mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-parchment/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-2xl font-light text-gold italic">
                Welcome to Velmora ✦
              </p>
              <p className="font-manrope text-xs text-parchment/50 mt-2">
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
                className="flex-1 bg-transparent border border-parchment/20 text-parchment placeholder:text-parchment/30 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-parchment/30 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
