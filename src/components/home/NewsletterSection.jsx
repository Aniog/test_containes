import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-velmora-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-4 font-medium">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-light tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-manrope text-sm text-velmora-text-light/50 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and an exclusive welcome offer.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl italic text-velmora-gold">
              Welcome to Velmora ✦
            </p>
            <p className="font-manrope text-xs text-velmora-text-light/50 mt-2">
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
              className="flex-1 bg-velmora-charcoal border border-velmora-stone text-velmora-text-light font-manrope text-sm px-5 py-4 placeholder:text-velmora-text-light/30 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest-md font-semibold px-6 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-velmora-text-light/25 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
