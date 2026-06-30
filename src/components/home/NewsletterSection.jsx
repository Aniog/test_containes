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
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-velmora-gold/40" />
            <span className="font-serif text-lg text-velmora-gold italic">✦</span>
            <div className="h-px w-12 bg-velmora-gold/40" />
          </div>

          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide leading-tight">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-velmora-muted mt-4 leading-relaxed">
            Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="mt-8 py-4 px-6 bg-velmora-obsidian/5 border border-velmora-border">
              <p className="font-serif text-xl font-light text-velmora-obsidian italic">
                Welcome to Velmora ✦
              </p>
              <p className="font-sans text-xs text-velmora-muted mt-1">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-velmora-surface border border-velmora-border px-5 py-4 font-sans text-sm text-velmora-obsidian placeholder:text-velmora-subtle focus:outline-none focus:border-velmora-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase font-medium px-6 py-4 hover:bg-velmora-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-velmora-subtle mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
