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
    <section className="py-20 md:py-28 bg-velmora-gold">
      <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/80 mb-3">
          Stay in the Loop
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-white/80 mb-10 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" strokeWidth={2} />
            <span className="font-sans text-sm font-medium">
              Thank you! Check your inbox for your code.
            </span>
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
              className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded px-5 py-3.5 font-sans text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-velmora-gold font-sans text-xs font-semibold tracking-[0.2em] uppercase px-8 py-3.5 rounded hover:bg-velmora-cream transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-white/50 mt-5">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
