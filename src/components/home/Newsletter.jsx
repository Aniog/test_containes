import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/90 mb-8 md:mb-10 max-w-md mx-auto leading-relaxed">
          Subscribe for early access to new collections, styling notes, and a
          welcome gift on your first order.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">
              Thank you — your code is on its way.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white text-velmora-charcoal placeholder:text-velmora-taupe px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-velmora-espresso text-white px-6 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-velmora-charcoal transition-colors"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="mt-5 text-[11px] text-white/70">
          By subscribing, you agree to receive marketing emails from Velmora.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
