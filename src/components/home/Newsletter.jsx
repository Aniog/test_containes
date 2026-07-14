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
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-cream mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-velmora-cream/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-xl italic text-velmora-gold">
                Welcome to Velmora. Your discount code is on its way.
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
                className="flex-1 bg-transparent border border-velmora-stone text-velmora-cream placeholder-velmora-text-muted font-sans text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 font-600 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-velmora-text-muted mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
