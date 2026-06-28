import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="bg-velmora-charcoal py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail size={28} className="text-velmora-gold mx-auto mb-5" />
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-white/60 text-sm sm:text-base mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-velmora-gold font-serif text-lg italic">
            Welcome to the circle. Check your inbox!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-velmora-gold text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-velmora-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/30 text-[11px] mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
