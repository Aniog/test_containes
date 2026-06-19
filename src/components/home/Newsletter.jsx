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
    <section className="bg-gold-500/10 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-gold-600 font-medium mb-3">
          Stay in the Loop
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-ink-500">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-ink-700">
            <Check size={18} className="text-gold-600" />
            <span className="text-sm font-medium">Thank you! Check your inbox for your discount.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-ink-200 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-gold-500 rounded-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-ink-900 text-cream-50 px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-ink-800 transition-colors rounded-sm"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-ink-400">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
