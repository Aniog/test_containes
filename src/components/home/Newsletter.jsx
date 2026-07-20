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
    <section className="bg-velmora-espresso px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 font-sans text-xs uppercase tracking-ultra text-velmora-goldLight">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl text-velmora-cream md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mt-4 font-sans text-sm leading-relaxed text-velmora-warm">
          Subscribe for early access to new collections, styling tips, and
          exclusive member-only offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border border-velmora-brown bg-transparent px-5 py-3.5 font-sans text-sm text-velmora-cream placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-velmora-gold px-8 py-3.5 font-sans text-xs uppercase tracking-widest text-velmora-charcoal transition-colors hover:bg-velmora-goldLight"
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
        <p className="mt-4 text-[11px] text-velmora-taupe">
          By subscribing, you agree to receive marketing emails from Velmora.
          Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}