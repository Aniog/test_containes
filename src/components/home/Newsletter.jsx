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
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-velmora-gold" />
            <span className="text-velmora-gold text-lg">✦</span>
            <div className="h-px w-12 bg-velmora-gold" />
          </div>

          <p className="text-xs font-sans uppercase tracking-widest text-velmora-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-velmora-ivory mb-4 leading-tight">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-velmora-stone leading-relaxed mb-10">
            Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="py-6">
              <p className="font-serif italic text-xl text-velmora-gold mb-2">
                Welcome to Velmora ✦
              </p>
              <p className="text-xs font-sans text-velmora-stone uppercase tracking-widest">
                Your 10% discount code is on its way
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
                className="flex-1 bg-transparent border border-velmora-mink text-velmora-ivory placeholder-velmora-mink text-xs font-sans px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian px-6 py-4 text-xs font-sans uppercase tracking-widest hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[10px] font-sans text-velmora-mink mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
