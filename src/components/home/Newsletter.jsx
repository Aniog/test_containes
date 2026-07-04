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
    <section className="py-20 lg:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-obsidian/60 mb-3">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian leading-tight mb-3">
          10% Off Your First Order
        </h2>
        <p className="font-manrope text-sm text-velmora-obsidian/70 mb-8 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl italic text-velmora-obsidian">
              Welcome to Velmora ✦
            </p>
            <p className="font-manrope text-sm text-velmora-obsidian/70 mt-2">
              Your 10% discount code is on its way to your inbox.
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
              className="flex-1 bg-velmora-obsidian/10 border border-velmora-obsidian/20 text-velmora-obsidian placeholder-velmora-obsidian/40 font-manrope text-sm px-5 py-4 outline-none focus:border-velmora-obsidian/50 transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-velmora-obsidian text-velmora-gold font-manrope text-xs tracking-widest uppercase px-7 py-4 hover:bg-velmora-charcoal transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[11px] text-velmora-obsidian/40 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
