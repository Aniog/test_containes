import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-cream/50 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="animate-fadeIn">
              <p className="font-cormorant text-2xl italic text-gold">
                Welcome to Velmora.
              </p>
              <p className="font-manrope text-xs text-cream/50 mt-2">
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
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-cream font-manrope text-xs uppercase tracking-[0.14em] px-7 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-cream/25 mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
