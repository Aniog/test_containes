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
    <section className="bg-obsidian py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ivory mb-4">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-xl italic text-gold">
                Welcome to Velmora. ✦
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
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder:text-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-sans text-xs font-semibold uppercase tracking-widest px-7 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-ivory/30 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
