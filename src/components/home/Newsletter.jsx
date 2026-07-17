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
      setEmail('');
    }
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream leading-tight">
          10% off your first order
        </h2>
        <p className="font-manrope text-sm text-cream/60 mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration,
          and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-5 border border-gold/30 px-8">
            <p className="font-cormorant text-xl text-gold italic">
              Welcome to Velmora. Your 10% code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-manrope text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-cream/30 mt-4 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
