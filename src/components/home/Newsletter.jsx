import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-28 bg-obsidian">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs font-sans tracking-widest uppercase text-gold mb-4 font-medium">
          Join the Circle
        </p>
        <h2 className="font-display text-4xl lg:text-5xl font-light text-ivory mb-4 leading-tight">
          10% off your first order
        </h2>
        <p className="font-sans text-base text-stone mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-display text-2xl italic text-gold mb-2">Thank you for joining.</p>
            <p className="text-sm font-sans text-stone">Your 10% discount code is on its way to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-charcoal border border-stone text-ivory placeholder-stone text-sm font-sans px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian text-xs tracking-widest uppercase font-sans font-semibold px-8 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[11px] font-sans text-stone/60 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
