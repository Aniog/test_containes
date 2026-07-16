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
    <section className="py-20 md:py-28 bg-gold-pale">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold-muted mb-4">
          Exclusive Offer
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian mb-4 leading-tight">
          Join for 10% Off<br />
          <em className="italic">Your First Order</em>
        </h2>
        <p className="font-sans text-sm text-obsidian-500 mb-10 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. No spam, ever.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-obsidian text-cream px-8 py-4">
              <span className="text-gold">✦</span>
              <span className="font-sans text-sm font-medium tracking-wide">
                Welcome to Velmora — check your inbox for your discount.
              </span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-4 bg-white border border-obsidian-200 font-sans text-sm text-obsidian placeholder-obsidian-300 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-obsidian text-cream font-sans text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-obsidian-700 transition-colors whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-obsidian-400 mt-4">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
