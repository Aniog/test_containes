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
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="text-velmora-stone mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-velmora-gold">
            <Check size={18} />
            <span className="font-sans text-sm font-medium">
              Welcome to Velmora. Check your inbox for your code.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-velmora-border bg-white font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-velmora-muted mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
