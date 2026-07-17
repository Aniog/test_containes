import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-velvet py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="section-label text-champagne/70 mb-4">Join the Inner Circle</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light italic text-cream mb-4 leading-tight">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-stone leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border border-champagne/40 flex items-center justify-center">
              <span className="text-champagne text-xl">✓</span>
            </div>
            <p className="font-serif text-xl italic text-cream">Welcome to Velmora</p>
            <p className="font-sans text-xs text-stone">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-mink/60 text-cream placeholder-stone/60 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-champagne/60 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 sm:border-l-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-stone/40 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
