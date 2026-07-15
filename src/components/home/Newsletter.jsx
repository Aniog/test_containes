import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-velmora-charcoal relative overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-velmora-gold/5 via-transparent to-velmora-gold/3" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 text-center">
        <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-4">
          Stay in Touch
        </p>
        <h2 className="font-serif text-heading-lg md:text-heading-xl text-velmora-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-body text-velmora-muted max-w-md mx-auto mb-8">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-heading-sm text-velmora-gold mb-2">
              Welcome to Velmora
            </p>
            <p className="text-body-sm text-velmora-silver">
              Check your inbox for your exclusive 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 bg-velmora-dark border border-velmora-graphite text-velmora-white placeholder:text-velmora-slate text-body-sm focus:outline-none focus:border-velmora-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary py-3.5 px-8 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-velmora-slate mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
