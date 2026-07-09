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
    <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-gold/10 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-gold/10 translate-x-1/3 translate-y-1/3 rounded-full" />

      <div className="relative max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-widest font-medium text-gold mb-4 font-sans">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-base font-sans text-cream/60 mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-gold mx-auto mb-5" />
            <p className="font-serif text-2xl font-light text-cream italic">
              Welcome to Velmora.
            </p>
            <p className="text-sm font-sans text-cream/60 mt-2">
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
              className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 px-5 py-4 text-sm font-sans outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-xs font-sans text-cream/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
