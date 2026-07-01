import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velmora-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
          10% off your first order
        </h2>
        <p className="text-sm text-white/60 font-sans leading-relaxed mb-10">
          Subscribe for early access to new collections, exclusive offers,
          and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-velmora-gold mx-auto mb-5" />
            <p className="font-serif text-xl font-light text-white italic">
              Welcome to Velmora.
            </p>
            <p className="text-sm text-white/60 font-sans mt-2">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian text-xs uppercase tracking-widest font-semibold px-7 py-4 hover:bg-velmora-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-white/30 font-sans mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
