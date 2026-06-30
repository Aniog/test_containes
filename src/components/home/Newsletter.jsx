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
    <section className="py-16 md:py-20 bg-obsidian">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-sans tracking-widest uppercase text-gold mb-3">Exclusive Access</p>
        <h2 className="font-serif text-3xl md:text-4xl text-parchment font-light leading-snug">
          Join for 10% Off<br />
          <em className="italic">Your First Order</em>
        </h2>
        <p className="mt-4 text-sm font-sans text-ghost leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 py-4 px-6 border border-gold/40 inline-block">
            <p className="text-sm font-sans text-parchment">
              ✦ Thank you! Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-charcoal border border-stone/40 text-parchment placeholder-ghost text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian text-xs tracking-wider uppercase font-sans font-semibold px-6 py-3.5 hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="mt-4 text-xs font-sans text-stone">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
