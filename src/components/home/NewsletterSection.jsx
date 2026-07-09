import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="bg-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-obsidian/60 mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-obsidian/70 leading-relaxed mb-8">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-serif text-xl font-light text-obsidian">
              Thank you for joining Velmora. ✦
            </p>
            <p className="font-sans text-sm text-obsidian/70 mt-2">
              Check your inbox for your 10% off code.
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
              className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/40 font-sans text-sm px-5 py-4 outline-none focus:border-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-obsidian text-warm-white font-sans text-xs uppercase tracking-[0.12em] font-semibold px-6 py-4 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-obsidian/50 mt-4 uppercase tracking-[0.08em]">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
