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
    <section className="py-20 md:py-24 bg-obsidian">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ivory leading-tight mb-4">
          Join for 10% off your<br />
          <em className="italic">first order</em>
        </h2>
        <p className="font-sans text-sm text-taupe-light mb-10 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-2">
              <span className="text-gold text-xl">✓</span>
            </div>
            <p className="font-serif text-xl font-light text-ivory">Welcome to Velmora</p>
            <p className="font-sans text-sm text-taupe-light">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-obsidian-light border border-taupe/30 text-ivory placeholder-taupe font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans font-semibold text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-taupe/60 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
