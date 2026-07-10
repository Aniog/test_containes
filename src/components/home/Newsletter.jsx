import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
        <h2 className="font-serif text-2xl md:text-3xl text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-white/60 font-sans">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-gold font-sans">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white text-sm font-sans placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-3 text-xs uppercase tracking-ultra-wide font-sans font-medium hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
