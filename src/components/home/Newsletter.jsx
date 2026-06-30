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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8">
          Subscribe for 10% off your first order, early access to new arrivals, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border border-white/30 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-velmora-base px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-velmora-cream transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
