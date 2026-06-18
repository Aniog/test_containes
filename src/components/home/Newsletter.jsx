import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="font-manrope text-sm text-ivory/60 mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-8 py-4 px-6 border border-gold/40 inline-block">
            <p className="font-cormorant text-lg italic text-gold">
              Welcome to Velmora. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-manrope text-xs uppercase tracking-widest px-6 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors flex-shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3 h-3" />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-ivory/30 mt-4">
          No spam. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
