import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-velmora-obsidian/60 mb-3">
          Exclusive Offer
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="font-inter text-sm text-velmora-obsidian/70 leading-relaxed mb-8">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration — delivered to your inbox.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-cormorant text-2xl text-velmora-obsidian italic">
              Welcome to Velmora. Your code is on its way ✦
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
              className="flex-1 bg-velmora-obsidian/10 border border-velmora-obsidian/20 text-velmora-obsidian placeholder-velmora-obsidian/40 font-inter text-sm px-5 py-3 focus:outline-none focus:border-velmora-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-velmora-obsidian text-velmora-linen font-inter text-[11px] tracking-widest uppercase px-7 py-3 hover:bg-velmora-charcoal transition-colors duration-200 flex-shrink-0"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-velmora-obsidian/40 mt-4 tracking-wide">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
