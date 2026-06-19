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
    <section className="py-16 md:py-20 bg-charcoal-400">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-12 h-px bg-gold-500 mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 tracking-wide mb-3">
            Join the Velmora Circle
          </h2>
          <p className="text-sm text-cream-100/60 mb-8">
            Be the first to discover new arrivals, exclusive offers, and styling inspiration. 
            Plus, enjoy <span className="text-gold-400 font-medium">10% off</span> your first order.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="text-gold-400 font-serif text-lg tracking-wide">
                Welcome to the circle.
              </p>
              <p className="text-cream-100/50 text-sm mt-2">
                Check your inbox for your exclusive discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-charcoal-300 border border-charcoal-100 text-cream-100 text-sm placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-500 text-cream-50 px-8 py-3.5 text-xs font-medium uppercase tracking-widest-xl font-sans transition-all duration-300 hover:bg-gold-600 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[10px] text-cream-300/30 mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
