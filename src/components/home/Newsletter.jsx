import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-px h-20 bg-brand-gold/30" />
      <div className="absolute top-0 right-0 w-px h-20 bg-brand-gold/30" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center relative z-10">
        <p className="font-sans text-[11px] tracking-super-wide uppercase text-brand-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-white">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-white/40 mt-4 max-w-md mx-auto leading-relaxed">
          Subscribe to our newsletter for early access to new collections, exclusive offers, and 10% off your first order.
        </p>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-brand-gold">
              Welcome to Velmora
            </p>
            <p className="font-sans text-sm text-white/40 mt-2">
              Check your inbox for your 10% code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/5 border border-white/15 text-white placeholder-white/25 font-sans text-sm px-5 py-4 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="accent-button whitespace-nowrap flex items-center gap-2">
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
