import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="py-20 md:py-24 bg-velmora-obsidian">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-velmora-gold/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
          <div className="h-px w-12 bg-velmora-gold/40" />
        </div>

        <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ivory tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-sm text-velmora-subtle leading-relaxed mb-10">
          Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-velmora-gold/20 flex items-center justify-center">
              <Check size={20} className="text-velmora-gold" strokeWidth={2} />
            </div>
            <p className="font-serif text-xl font-light text-velmora-ivory">
              Welcome to Velmora
            </p>
            <p className="text-xs text-velmora-subtle">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-velmora-charcoal text-velmora-ivory placeholder-velmora-subtle px-5 py-4 text-sm focus:outline-none focus:border-velmora-gold transition-colors duration-200"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian px-6 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-velmora-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}

        {error && (
          <p className="mt-3 text-xs text-red-400">{error}</p>
        )}

        <p className="mt-5 text-[10px] text-velmora-subtle tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
