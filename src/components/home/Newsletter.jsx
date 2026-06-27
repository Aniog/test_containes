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
    <section className="bg-[var(--color-accent)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-80" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center text-white">
        <span className="text-xs tracking-[0.3em] uppercase text-white/60">The Velmora Circle</span>
        <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl mt-3 font-semibold">Join for 10% off your first order</h2>
        <p className="text-white/70 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Early access to new collections, exclusive offers, and styling inspiration — delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-10 flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" />
            <span className="font-medium">Thank you! Check your inbox for your discount code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-white/15 border border-white/25 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-[var(--color-accent-dark)] text-sm tracking-wider uppercase font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-xs text-white/40 mt-5">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
