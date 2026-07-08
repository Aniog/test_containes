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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-cormorant text-4xl md:text-5xl text-cream font-light mb-3">
          Join for 10% Off
        </h2>
        <p className="font-manrope text-sm text-cream/50 mb-8 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl text-gold italic">Thank you for joining.</p>
            <p className="font-manrope text-xs text-cream/40 mt-2">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-cream placeholder-cream/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={12} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-cream/25 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
