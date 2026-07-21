import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

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
    <section className="bg-gold-500 section-padding section-padding-y">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-8 h-8 text-gold-100/60 mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-gold-100/80 text-sm mb-8">
          Get 10% off your first order, early access to new drops, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-white animate-fade-in">
            <Check className="w-5 h-5" />
            <span className="font-sans text-sm tracking-wide">Welcome to the circle!</span>
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
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-gold-600/50 border border-gold-400/30 text-white placeholder-gold-200/50 text-sm focus:outline-none focus:border-white/50 transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-ink-800 text-cream-50 font-sans text-sm font-medium tracking-ultra-wide uppercase hover:bg-ink-900 transition-colors active:scale-[0.98]"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-gold-200/40 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
