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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gold/30" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="w-16 h-px bg-gold/30" />
        </div>

        <p className="font-sans text-xs tracking-widest uppercase text-gold font-semibold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight">
          10% off your<br />
          <em className="italic">first order</em>
        </h2>
        <p className="font-sans text-sm text-ivory/50 mt-5 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration,
          and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-5">
            <p className="font-serif text-xl text-gold italic">Welcome to Velmora ✦</p>
            <p className="font-sans text-sm text-ivory/50 mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-charcoal border border-stone text-ivory placeholder-ghost font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-6 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-ivory/25 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
