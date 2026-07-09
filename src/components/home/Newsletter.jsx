import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="bg-brand-charcoal py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="heading-serif text-3xl md:text-4xl text-white font-light mb-3">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-brand-taupe mb-2">
          Subscribe for 10% off your first order
        </p>
        <p className="font-sans text-xs text-brand-taupe/60 mb-8">
          Plus early access to new collections, exclusive drops, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-brand-gold text-lg">Thank you for subscribing!</p>
            <p className="font-sans text-sm text-brand-taupe mt-2">Check your inbox for your welcome code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-brand-charcoal-light text-white font-sans text-sm placeholder:text-brand-taupe/50 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-accent flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}