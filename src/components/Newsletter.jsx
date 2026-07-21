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
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-gold">
      <div className="mx-auto max-w-[680px] px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal">
          Join for 10% Off
        </h2>
        <p className="mt-4 font-sans text-sm md:text-base text-velmora-charcoal/80">
          Subscribe for exclusive early access to new collections, styling tips, and your first order discount.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-velmora-cream text-velmora-charcoal text-sm placeholder:text-velmora-stone border-0 focus:outline-none focus:ring-2 focus:ring-velmora-charcoal/20"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-velmora-charcoal text-velmora-cream text-xs font-semibold uppercase tracking-widest hover:bg-velmora-charcoal-soft transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <Check size={14} />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        <p className="mt-4 text-[11px] text-velmora-charcoal/60">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
