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
    <section className="bg-velmora-obsidian py-20 md:py-28 relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velmora-gold/40 to-transparent" />

      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center relative z-10">
        <p className="text-xs tracking-widest uppercase font-medium text-velmora-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ivory tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-sm text-velmora-mist leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers. No spam — only beauty.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-velmora-gold mx-auto mb-5" />
            <p className="font-serif text-xl font-light italic text-velmora-ivory">
              Welcome to Velmora.
            </p>
            <p className="text-xs text-velmora-mist mt-2">
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
              className="flex-1 bg-velmora-charcoal border border-velmora-stone/50 text-velmora-ivory placeholder-velmora-stone text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian text-xs tracking-widest uppercase font-semibold px-6 py-4 hover:bg-velmora-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-velmora-stone mt-4 tracking-wide">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velmora-gold/40 to-transparent" />
    </section>
  );
}
