import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-velmora-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-white/60 mb-10 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration — straight to your inbox.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl font-light text-velmora-gold italic">
              Thank you for joining Velmora.
            </p>
            <p className="font-sans text-sm text-white/60 mt-2">
              Check your inbox for your 10% discount code.
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
              className="flex-1 bg-transparent border border-white/20 text-white placeholder-white/40 font-sans text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-6 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-white/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
