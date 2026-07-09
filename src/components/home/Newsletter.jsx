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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-gold mb-5">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-parchment leading-tight mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm font-light text-parchment/60 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl font-light text-gold italic">
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
              className="flex-1 bg-transparent border border-parchment/20 text-parchment placeholder-parchment/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-[11px] font-medium uppercase tracking-widest px-6 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-parchment/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
