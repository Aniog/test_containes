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
    <section className="py-20 md:py-28 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-base/60 mb-3">Join the List</p>
        <h2 className="font-serif text-4xl md:text-5xl text-base">
          Get 10% Off Your First Order
        </h2>
        <p className="mt-4 text-base text-base/70 font-sans font-light">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-base">
            <Check size={18} />
            <span className="font-sans text-sm font-medium">Thank you! Check your inbox for your code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3.5 bg-base text-warm-white placeholder:text-warm-white/40 font-sans text-sm rounded border border-transparent focus:border-base/30 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-base text-warm-white font-sans text-sm font-semibold uppercase tracking-wider hover:bg-surface transition-colors rounded flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="mt-4 text-[10px] text-base/50 font-sans">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
