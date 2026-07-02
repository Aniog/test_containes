import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-parchment font-light leading-tight">
          10% off your<br />first order
        </h2>
        <p className="font-sans text-sm text-parchment/50 mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-8 py-4 px-6 border border-gold/30 inline-block">
            <p className="font-serif text-lg text-gold italic">
              Welcome to Velmora ✦
            </p>
            <p className="font-sans text-xs text-parchment/50 mt-1">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-stone/50 text-parchment placeholder-parchment/30 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 font-medium flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-parchment/25 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
