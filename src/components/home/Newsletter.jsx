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
    <section className="bg-obsidian py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-manrope uppercase tracking-widest text-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-parchment mb-4">
            10% off your first order
          </h2>
          <p className="text-sm font-manrope text-parchment/60 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-xl italic text-gold">
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
                className="flex-1 bg-transparent border border-white/20 text-parchment placeholder-parchment/30 px-5 py-4 text-xs font-manrope focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian px-6 py-4 text-xs font-manrope uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="text-[10px] font-manrope text-parchment/30 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
