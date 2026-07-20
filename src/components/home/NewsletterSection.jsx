import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold mb-5">
          Join the Circle
        </p>
        <h2 className="font-cormorant font-light text-4xl md:text-5xl text-velmora-white leading-tight mb-4">
          10% off your first order
        </h2>
        <p className="font-inter font-light text-sm text-velmora-white/60 mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration,
          and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-velmora-gold flex items-center justify-center">
              <span className="text-velmora-gold text-lg">✓</span>
            </div>
            <p className="font-cormorant text-xl font-light text-velmora-white italic">
              Welcome to Velmora. Your code is on its way.
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
              className="flex-1 bg-transparent border border-velmora-white/20 text-velmora-white placeholder-velmora-white/40 font-inter text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-inter text-xs font-medium uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 hover:bg-velmora-gold-dark transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-inter text-xs text-velmora-white/30 mt-5">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
