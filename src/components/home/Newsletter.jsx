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
    <section className="bg-espresso py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-4">Exclusive Offer</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-4">
          Join for 10% Off
        </h2>
        <p className="font-manrope text-sm text-cream/60 leading-relaxed mb-10">
          Subscribe to the Velmora edit — new arrivals, styling inspiration, and an exclusive 10% off your first order.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-cormorant text-2xl text-gold italic">Thank you for joining us.</p>
            <p className="font-manrope text-xs text-cream/50 mt-2">Check your inbox for your welcome gift.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-cream/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
