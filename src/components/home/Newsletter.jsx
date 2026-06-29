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
    <section className="bg-velmora-gold/10 border-y border-velmora-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Join the Velmora Family
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light mb-3">
            10% Off Your First Order
          </h2>
          <p className="text-sm text-velmora-text-muted mb-8">
            Be the first to discover new arrivals, styling tips, and exclusive offers.
          </p>

          {submitted ? (
            <div className="animate-fade-in-up">
              <p className="font-serif text-lg text-velmora-gold mb-1">Welcome to Velmora</p>
              <p className="text-sm text-velmora-text-muted">Check your inbox for your exclusive discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-velmora-bg border border-velmora-border text-velmora-text text-sm placeholder:text-velmora-text-muted/60 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-velmora-gold text-velmora-bg text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <Send size={13} />
              </button>
            </form>
          )}

          <p className="text-[10px] text-velmora-text-muted/60 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
