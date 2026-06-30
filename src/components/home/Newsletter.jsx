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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-4">
          10% off your<br />
          <em className="italic">first order</em>
        </h2>
        <p className="font-sans text-sm text-velvet-300 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="py-6">
            <p className="font-serif text-xl text-gold italic">Welcome to Velmora.</p>
            <p className="font-sans text-sm text-velvet-300 mt-2">
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
              className="flex-1 bg-transparent border border-mink text-cream placeholder-stone font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-champagne-400 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-stone mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
