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
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bg-cream max-w-2xl mx-auto px-8 md:px-12 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-muted font-sans font-medium mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.08em] text-text-dark mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-text-dark-secondary text-sm mb-8 max-w-md mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling tips.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="text-gold-muted font-serif text-lg tracking-wide">
                Welcome to the Velmora family.
              </p>
              <p className="text-text-dark-secondary text-sm mt-1">
                Check your inbox for your exclusive discount.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white border border-border-subtle px-4 py-3 text-sm text-text-dark placeholder:text-text-dark-secondary/60 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-bg-deep text-text-primary px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-bg-warm transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
