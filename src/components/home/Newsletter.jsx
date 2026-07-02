import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-espresso py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-4">Join the inner circle</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-warm-white font-light mb-4">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-ghost leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="border border-gold/30 px-8 py-5">
              <p className="font-serif text-lg text-gold font-light italic">
                Welcome to Velmora. Your discount code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-charcoal border border-charcoal text-warm-white placeholder-ghost font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-espresso font-sans text-[11px] tracking-widest uppercase font-medium px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-200 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-ghost/60 mt-4 tracking-wide">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
