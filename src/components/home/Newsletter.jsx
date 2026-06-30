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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs tracking-[0.25em] uppercase text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
          Join for 10% Off
        </h2>
        <p className="font-manrope text-sm text-ivory/60 leading-relaxed mb-10">
          Be the first to know about new collections, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-cormorant text-2xl italic text-gold">
              Welcome to Velmora. ✦
            </p>
            <p className="font-manrope text-xs text-ivory/50 mt-2">
              Your discount code is on its way to your inbox.
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
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-manrope text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-ivory/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
