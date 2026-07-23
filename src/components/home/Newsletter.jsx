import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase font-medium text-velmora-obsidian/60 mb-3 font-sans">
          Exclusive Offer
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-velmora-obsidian/70 font-sans leading-relaxed mb-8">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-serif text-xl font-light text-velmora-obsidian">
              Thank you for joining. ✦
            </p>
            <p className="text-sm text-velmora-obsidian/70 font-sans mt-2">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-velmora-obsidian/10 border border-velmora-obsidian/20 text-velmora-obsidian placeholder-velmora-obsidian/50 px-4 py-3 text-sm font-sans outline-none focus:border-velmora-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-obsidian text-velmora-white px-6 py-3 text-xs tracking-widest uppercase font-medium font-sans hover:bg-velmora-charcoal transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-velmora-obsidian/50 font-sans mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
