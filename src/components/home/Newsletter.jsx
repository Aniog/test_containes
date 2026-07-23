import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 md:py-24 px-6 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-gold mb-4 font-sans">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-parchment mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-parchment/60 mb-10 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-2xl text-gold italic">Thank you for joining.</p>
            <p className="text-xs text-parchment/50 mt-2 tracking-wide">Your 10% discount is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-parchment/20 text-parchment placeholder-parchment/30 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold px-8 py-4 hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-parchment/30 mt-4 tracking-wide">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
