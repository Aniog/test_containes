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
    <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A96E 0%, transparent 50%), radial-gradient(circle at 70% 50%, #C9A96E 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-4">
          Exclusive Offer
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-4 leading-snug">
          Join for 10% off your<br />
          <em className="italic text-gold">first order</em>
        </h2>
        <p className="text-taupe-light text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-gold italic">Thank you for joining.</p>
            <p className="text-taupe-light text-sm mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-obsidian-light border border-gold/30 text-ivory placeholder-taupe text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold px-6 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-taupe text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
