import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-warm-dark">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
          Join the Velmora Circle
        </h2>
        <p className="text-white/60 text-sm mt-4 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button type="submit" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <p className="text-white/30 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
