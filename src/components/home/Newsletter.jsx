import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-velmora-espresso text-white px-8 py-14 md:px-16 md:py-20">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-velmora-gold-light mb-4">
            Join Velmora
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide leading-snug">
            Receive 10% off your
            <br />
            first order
          </h2>
          <p className="mt-4 font-sans text-sm text-white/60 leading-relaxed max-w-md mx-auto">
            Early access to new collections, exclusive offers, and styling
            inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <p className="mt-10 font-serif text-lg text-velmora-gold-light italic">
              Thank you — check your inbox for your welcome code.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-white/20 text-white placeholder:text-white/30 font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-velmora-gold-light transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-white font-sans text-xs font-medium uppercase tracking-[0.2em] px-8 py-3.5 hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="mt-5 text-[10px] text-white/30 font-sans tracking-wide">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
