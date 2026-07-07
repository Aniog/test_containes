import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="bg-brand-charcoal py-16 lg:py-20">
      <div className="max-w-[680px] mx-auto px-4 text-center">
        <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-brand-ivory font-light mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-brand-ivory/50 text-sm mb-8 max-w-md mx-auto">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-brand-charcoal border border-brand-ivory/20 text-brand-ivory text-sm placeholder:text-brand-ivory/30 font-sans focus:outline-none focus:border-brand-gold transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-brand-gold text-brand-dark-bg text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? 'Welcome!' : 'Subscribe'}
            {!submitted && <Send size={14} strokeWidth={1.5} />}
          </button>
        </form>

        <p className="text-brand-ivory/20 text-[11px] mt-4 font-sans">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
