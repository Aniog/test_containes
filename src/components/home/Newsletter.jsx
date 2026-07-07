import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream leading-tight">
          10% off your first order
        </h2>
        <p className="font-inter text-sm text-stone leading-relaxed mt-4 max-w-md mx-auto">
          Subscribe for early access to new collections, styling inspiration,
          and exclusive member-only offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-5 border border-gold/30">
            <p className="font-cormorant text-xl italic text-cream">
              Welcome to Velmora ✦
            </p>
            <p className="font-inter text-xs text-stone mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-cream font-inter text-sm px-5 py-4 outline-none placeholder:text-stone focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-inter text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3 h-3" />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-stone/60 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
