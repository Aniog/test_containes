import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Join the Circle</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory leading-[1.15] mb-4">
            10% off your<br />
            <em className="italic">first order</em>
          </h2>
          <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
                <Check size={20} strokeWidth={1.5} className="text-gold" />
              </div>
              <p className="font-serif text-xl font-light text-ivory">Welcome to Velmora</p>
              <p className="font-sans text-sm text-ivory/50">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-ivory font-sans text-xs tracking-widest uppercase px-6 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 group flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-ivory/25 mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
