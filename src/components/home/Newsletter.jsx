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
    <section className="bg-velmora-obsidian py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-velmora-pale mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-velmora-mist/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-6">
              <p className="font-serif text-xl text-velmora-gold italic">
                Welcome to Velmora. ✦
              </p>
              <p className="font-sans text-sm text-velmora-mist/60 mt-2">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-velmora-charcoal border border-velmora-stone/60 text-velmora-pale placeholder-velmora-mist/40 font-sans text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase px-7 py-4 hover:bg-velmora-gold-light transition-all duration-300 font-semibold flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-velmora-mist/30 mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
