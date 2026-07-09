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
    <section className="bg-gold">
      <div className="section-container py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-obsidian/60 mb-3">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-obsidian font-light leading-tight">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-obsidian/70 mt-3 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="mt-8 py-4">
              <p className="font-serif text-xl text-obsidian italic">
                Welcome to Velmora. Your code is on its way.
              </p>
              <p className="font-sans text-sm text-obsidian/60 mt-2">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/40 px-5 py-3 font-sans text-sm focus:outline-none focus:border-obsidian/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-obsidian text-cream font-sans text-xs tracking-widest uppercase px-6 py-3 hover:bg-charcoal transition-colors flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} />
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
