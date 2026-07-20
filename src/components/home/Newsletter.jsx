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
    <section className="bg-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-obsidian/60 mb-3">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian leading-snug mb-3">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-obsidian/70 mb-8 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in-up">
            <p className="font-serif text-xl font-light text-obsidian italic">
              Welcome to Velmora. ✦
            </p>
            <p className="font-sans text-sm text-obsidian/60 mt-2">
              Your 10% discount code is on its way.
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
              className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/40 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-obsidian/50 transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-obsidian text-cream font-sans text-xs tracking-widest uppercase px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-obsidian/40 mt-4 tracking-wide">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
