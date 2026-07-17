import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-velmora-gold mb-4 font-medium">
            Join the Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-sm text-velmora-slate leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and an exclusive welcome discount.
          </p>

          {submitted ? (
            <div className="py-6">
              <p className="font-serif text-xl font-light italic text-velmora-obsidian">
                Welcome to Velmora. ✦
              </p>
              <p className="text-xs text-velmora-slate mt-2">
                Check your inbox for your 10% discount code.
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
                className="flex-1 px-5 py-4 bg-velmora-cream border border-velmora-mist text-sm text-velmora-obsidian placeholder:text-velmora-dust focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-velmora-obsidian text-velmora-cream text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="text-[10px] text-velmora-dust mt-4 tracking-wide">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
