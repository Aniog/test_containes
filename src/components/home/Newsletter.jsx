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
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-light tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-inter text-sm text-velmora-sand/80 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-cormorant text-2xl italic text-velmora-gold">
              Welcome to Velmora. ✦
            </p>
            <p className="font-inter text-xs text-velmora-sand/70 mt-2">
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
              className="flex-1 bg-transparent border border-velmora-stone/60 text-velmora-text-light placeholder-velmora-mist font-inter text-sm px-5 py-3.5 focus:outline-none focus:border-velmora-gold transition-colors duration-300 sm:border-r-0"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-inter text-xs tracking-[0.15em] uppercase px-7 py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-velmora-mist/60 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
