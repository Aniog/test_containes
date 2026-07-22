import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-inter text-sm text-cream/50 mb-10 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <span className="text-gold text-lg">✓</span>
              </div>
              <p className="font-cormorant text-xl italic text-cream">
                Welcome to Velmora
              </p>
              <p className="font-inter text-xs text-cream/50 uppercase tracking-widest">
                Your 10% discount is on its way
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-stone/30 text-cream placeholder-cream/30 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-cream font-inter text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-inter text-xs text-cream/30 mt-5">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
