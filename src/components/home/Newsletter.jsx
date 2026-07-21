import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-velmora-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-velmora-gold/40" />
          <div className="w-1.5 h-1.5 bg-velmora-gold rotate-45" />
          <div className="w-16 h-px bg-velmora-gold/40" />
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-medium mb-4">
          Join the Inner Circle
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-text-light tracking-wide mb-4">
          10% Off Your First Order
        </h2>

        <p className="text-sm text-velmora-mist font-light leading-relaxed mb-10 max-w-md mx-auto">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers. No spam, ever.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-10 h-px bg-velmora-gold mx-auto mb-4" />
            <p className="font-serif text-xl text-velmora-text-light font-light">
              Welcome to Velmora.
            </p>
            <p className="text-xs text-velmora-mist mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-velmora-obsidian border border-velmora-stone/50 text-velmora-text-light placeholder-velmora-stone text-xs px-5 py-4 outline-none focus:border-velmora-gold transition-colors duration-300 font-light tracking-wide"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian text-xs tracking-[0.18em] uppercase font-medium px-7 py-4 hover:bg-velmora-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-velmora-stone mt-5 font-light">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
