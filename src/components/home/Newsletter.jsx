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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4 font-medium">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-ivory/60 mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-px bg-gold mx-auto" />
            <p className="font-serif text-xl text-ivory italic">Welcome to Velmora.</p>
            <p className="font-sans text-sm text-ivory/60">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 px-5 py-4 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory px-6 py-4 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-ivory/30 mt-6">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
