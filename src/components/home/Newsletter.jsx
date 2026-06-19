import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-deep-950">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="section-subheading text-gold-400/80">JOIN THE LIST</p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mt-3 font-medium">
          Join for 10% off your first order
        </h2>
        <p className="text-cream-400/80 text-sm mt-4 max-w-md mx-auto leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {sent ? (
          <p className="text-gold-400 text-sm mt-8 animate-fade-in tracking-wide">
            Thank you! Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-cream-500/30 px-2 py-3 text-cream-200 text-sm placeholder:text-cream-500/50 outline-none focus:border-gold-500 transition-colors"
            />
            <button type="submit" className="btn-primary px-6 py-3 text-xs tracking-wider">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
