import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 sm:py-28 bg-brand-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gold/10 border border-brand-gold/20 px-6 py-14 sm:px-16 sm:py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
            Exclusive Access
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream mb-4">
            Join for 10% Off
          </h2>
          <p className="text-sm text-brand-soft max-w-md mx-auto mb-8">
            Be the first to discover new arrivals, styling inspiration, and member-only offers.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-brand-gold">
              <Check size={18} />
              <span className="text-sm font-medium">Thank you for subscribing</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-brand-base border border-white/10 px-4 py-3 text-sm text-brand-cream placeholder:text-brand-muted focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-gold text-brand-base text-sm font-semibold uppercase tracking-widest hover:bg-brand-goldLight transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}