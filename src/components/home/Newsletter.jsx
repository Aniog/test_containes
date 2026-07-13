import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-obsidian/60 mb-3">
          Exclusive Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-obsidian/70 mb-8 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 border-2 border-obsidian rounded-full flex items-center justify-center">
              <span className="text-obsidian text-lg">✓</span>
            </div>
            <p className="font-serif text-lg text-obsidian italic">
              Welcome to Velmora. Your code is on its way.
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
              className="flex-1 bg-obsidian/10 border border-obsidian/30 text-obsidian placeholder-obsidian/40 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-obsidian transition-colors"
            />
            <button
              type="submit"
              className="bg-obsidian text-warm-white font-sans text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-charcoal transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={12} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-obsidian/40 mt-4 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
