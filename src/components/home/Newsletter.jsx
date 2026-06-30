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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white/50 mb-8 max-w-md mx-auto">
          Be the first to hear about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-up">
            <p className="font-serif text-xl text-gold italic">
              Thank you — check your inbox for your welcome gift.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-gold transition-colors rounded-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wide hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
