import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-warmwhite tracking-wide leading-tight">
          Join for 10% Off<br />
          <em className="italic">Your First Order</em>
        </h2>
        <p className="font-inter text-sm text-stone-light mt-5 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-10 py-4">
            <p className="font-cormorant text-2xl font-light text-gold italic">
              Welcome to Velmora ✦
            </p>
            <p className="font-inter text-xs text-stone-light mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-warmwhite placeholder-stone-light font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-warmwhite font-inter text-[11px] uppercase tracking-[0.16em] px-6 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-stone-light/60 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
