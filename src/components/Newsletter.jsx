import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-14 md:py-20 bg-gold">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center text-white">
        <h2 className="font-serif text-3xl md:text-4xl">Join the Inner Circle</h2>
        <p className="mt-3 text-sm md:text-base opacity-90">
          Subscribe for 10% off your first order, early access to new collections, and insider styling tips.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-medium">
            <Check size={18} strokeWidth={2} />
            Thank you! Check your inbox for your exclusive code.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/20 placeholder-white/70 text-white px-4 py-3 text-sm outline-none border border-white/30 focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-gold px-6 py-3 text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-cream transition-colors"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
