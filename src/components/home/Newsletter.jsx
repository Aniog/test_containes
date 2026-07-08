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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/40" />
            <span className="font-manrope text-xs tracking-[0.2em] uppercase text-gold">
              Join Velmora
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>

          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-ivory/60 leading-relaxed mb-10">
            Join our community for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-xl italic text-gold">
                Welcome to Velmora. Check your inbox.
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
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/40 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="font-manrope text-xs text-ivory/30 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
