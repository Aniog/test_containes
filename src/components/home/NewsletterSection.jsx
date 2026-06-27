import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="bg-velmora-gold py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-obsidian/60 mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-velmora-obsidian font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-velmora-obsidian/70 mb-10 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-2xl text-velmora-obsidian italic">
              Thank you for joining Velmora.
            </p>
            <p className="font-sans text-sm text-velmora-obsidian/70 mt-2">
              Check your inbox for your 10% off code.
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
              className="flex-1 px-5 py-4 bg-velmora-obsidian/10 border border-velmora-obsidian/20 text-velmora-obsidian placeholder-velmora-obsidian/40 font-sans text-sm focus:outline-none focus:border-velmora-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-velmora-obsidian text-velmora-cream font-sans text-xs uppercase tracking-widest font-semibold hover:bg-velmora-charcoal transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-velmora-obsidian/50 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
