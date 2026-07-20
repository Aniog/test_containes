import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory tracking-wide mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-sans text-base text-ivory/60 mb-10 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="border border-gold/40 px-8 py-6">
              <p className="font-serif text-xl font-light text-ivory">
                Welcome to Velmora ✦
              </p>
              <p className="font-sans text-sm text-ivory/60 mt-2">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-white/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-espresso font-sans text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-ivory/30 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
