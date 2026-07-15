import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian/60 mb-3">
          Exclusive Offer
        </p>
        <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian mb-3">
          Join the Inner Circle
        </h2>
        <p className="font-manrope text-sm text-velmora-obsidian/70 mb-8 leading-relaxed">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl italic text-velmora-obsidian">
              Welcome to Velmora ✦
            </p>
            <p className="font-manrope text-xs text-velmora-obsidian/60 mt-2">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-velmora-obsidian/10 border border-velmora-obsidian/20 text-velmora-obsidian placeholder-velmora-obsidian/40 font-manrope text-sm px-4 py-3 focus:outline-none focus:border-velmora-obsidian/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-obsidian text-velmora-ivory font-manrope text-xs tracking-widest uppercase px-6 py-3 hover:bg-velmora-charcoal transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-manrope text-[11px] text-velmora-obsidian/40 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
