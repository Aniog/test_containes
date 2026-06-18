import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-linen border border-stone/20 px-8 md:px-16 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <p className="font-manrope text-xs font-medium tracking-widest uppercase text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-mist leading-relaxed mb-10 max-w-sm mx-auto">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <p className="font-cormorant text-xl font-light text-ink">
                Welcome to Velmora
              </p>
              <p className="font-manrope text-xs text-mist">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-parchment border border-stone/40 px-5 py-3.5 font-manrope text-sm text-ink placeholder:text-stone focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-velvet font-manrope text-xs font-semibold tracking-widest uppercase px-7 py-3.5 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-manrope text-xs text-stone/60 mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
