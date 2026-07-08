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
    <section className="bg-velmora-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-white/60 leading-relaxed mb-10 max-w-sm mx-auto">
          Be the first to discover new collections, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <div className="w-12 h-px bg-velmora-gold mx-auto mb-5" />
            <p className="font-serif text-xl font-light italic text-white">
              Welcome to Velmora.
            </p>
            <p className="text-sm text-white/60 mt-2">
              Your discount code is on its way to your inbox.
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
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-6 py-4 text-xs font-medium tracking-[0.15em] uppercase hover:bg-velmora-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-white/30 mt-5 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
