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
    <section className="bg-gold py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-obsidian/60 mb-4">
            Exclusive Access
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian leading-tight mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm text-obsidian/70 leading-relaxed mb-8">
            Be the first to discover new arrivals, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-xl text-obsidian italic">
                Welcome to Velmora. Your code is on its way. ✦
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
                className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/50 px-5 py-4 font-sans text-sm focus:outline-none focus:border-obsidian/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-obsidian text-ivory px-6 py-4 font-sans text-[11px] font-semibold uppercase tracking-widest hover:bg-charcoal transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-obsidian/50 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
