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
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Inner Circle
        </h2>
        <p className="text-white/80 text-sm mb-8">
          Subscribe for exclusive early access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <Check size={18} />
            <span className="text-sm font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-gold px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-cream transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}