import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="bg-velmora-obsidian py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Gold accent line */}
          <div className="w-12 h-px bg-velmora-gold mx-auto mb-8" />

          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-ivory mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-velmora-subtle leading-relaxed mb-10">
            Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <div className="w-12 h-12 rounded-full border border-velmora-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-velmora-gold text-xl">✓</span>
              </div>
              <p className="font-cormorant text-2xl text-velmora-ivory mb-2">
                Welcome to Velmora
              </p>
              <p className="font-manrope text-xs text-velmora-subtle">
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
                className="flex-1 bg-velmora-charcoal border border-velmora-charcoal text-velmora-ivory placeholder-velmora-subtle font-manrope text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-velmora-subtle mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
