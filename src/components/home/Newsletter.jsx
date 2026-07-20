import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-velmora-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-velmora-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-base text-white/60 mb-10 max-w-md mx-auto">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 font-sans text-sm tracking-wide focus:outline-none focus:border-velmora-gold transition-colors rounded-none"
            required
          />
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="font-sans text-xs text-white/30 mt-6">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
