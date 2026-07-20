import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian border-t border-velmora-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-light leading-tight">
            10% off your<br />
            <em className="italic">first order</em>
          </h2>
          <p className="font-manrope text-sm text-velmora-text-light/60 mt-5 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="mt-10 py-5 border border-velmora-gold/30">
              <p className="font-cormorant text-xl italic text-velmora-gold">
                Welcome to Velmora ✦
              </p>
              <p className="font-manrope text-xs text-velmora-text-light/60 mt-2">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 mt-10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-velmora-stone text-velmora-text-light placeholder-velmora-text-muted font-manrope text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-4 hover:bg-velmora-gold-light transition-colors duration-300 font-medium flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={13} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[11px] text-velmora-text-muted mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
