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
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-xs font-medium tracking-[0.2em] uppercase text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-cream/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-xl italic text-gold">
                Welcome to Velmora. Your discount is on its way.
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
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-cream font-manrope text-xs font-semibold tracking-[0.15em] uppercase px-7 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="font-manrope text-xs text-cream/30 mt-5">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
