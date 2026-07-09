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
    <section className="bg-obsidian py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-parchment leading-[1.15]">
            10% off your<br />
            <em className="italic">first order</em>
          </h2>
          <p className="font-sans text-sm text-parchment/60 mt-5 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="mt-10 py-4 px-6 border border-gold/40 inline-block">
              <p className="font-serif text-lg font-light text-gold italic">
                Welcome to Velmora ✦
              </p>
              <p className="font-sans text-xs text-parchment/60 mt-1">
                Your 10% discount code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-parchment/20 text-parchment placeholder-parchment/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-parchment/30 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
