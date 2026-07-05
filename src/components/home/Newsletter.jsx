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
    <section className="bg-charcoal border-t border-mink/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 font-medium">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-parchment font-light mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-sm text-parchment/60 mb-10 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
                <span className="text-gold text-lg">✓</span>
              </div>
              <p className="font-serif text-xl text-parchment font-light">Welcome to Velmora</p>
              <p className="text-xs text-stone">Check your inbox for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-obsidian border border-mink/60 text-parchment placeholder-stone text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300 sm:border-r-0"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian text-[10px] tracking-widest uppercase px-6 py-4 font-medium hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="mt-5 text-[10px] text-stone/60 tracking-wide">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
