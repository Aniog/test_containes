import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-obsidian/60 mb-3">
          Exclusive Offer
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-velmora-obsidian/70 mb-8 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-8 h-8 rounded-full bg-velmora-obsidian flex items-center justify-center">
              <Check size={16} className="text-velmora-gold" strokeWidth={2} />
            </div>
            <p className="font-sans text-sm font-medium text-velmora-obsidian">
              Welcome to Velmora! Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(''); }}
              placeholder="Your email address"
              className="flex-1 bg-velmora-obsidian/10 border border-velmora-obsidian/20 text-velmora-obsidian placeholder-velmora-obsidian/40 px-5 py-3.5 text-sm font-sans outline-none focus:border-velmora-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-obsidian text-velmora-gold px-7 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        {error && (
          <p className="font-sans text-xs text-velmora-obsidian/70 mt-3">{error}</p>
        )}

        <p className="font-sans text-[11px] text-velmora-obsidian/40 mt-4 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
