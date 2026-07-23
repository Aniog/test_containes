import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-cream font-light mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-inter text-sm text-cream/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="animate-fadeIn">
              <p className="font-cormorant text-2xl text-gold italic mb-2">Thank you for joining us.</p>
              <p className="font-inter text-sm text-cream/60">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white font-inter text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-cream/30 mt-5 uppercase tracking-widest">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
