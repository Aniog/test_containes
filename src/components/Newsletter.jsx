import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs tracking-ultra uppercase text-gold mb-3">Join the Inner Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
          10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-stone-light">
          Be the first to know about new drops, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-gold">
            <Check size={18} />
            <span className="text-sm">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3.5 bg-transparent border border-divider-dark text-cream text-sm placeholder:text-stone-light focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gold text-white text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="mt-4 text-[10px] text-stone tracking-wide">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
