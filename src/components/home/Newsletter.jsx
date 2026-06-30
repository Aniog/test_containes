import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Join the Circle</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ivory font-light leading-tight">
            10% off your<br />
            <em className="italic">first order</em>
          </h2>
          <p className="font-sans text-sm text-ivory/60 mt-5 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="mt-10">
              <div className="w-12 h-px bg-gold mx-auto mb-4" />
              <p className="font-serif text-xl text-ivory italic">Thank you for joining.</p>
              <p className="font-sans text-xs text-ivory/50 mt-2 tracking-wide">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe <ArrowRight size={12} />
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-ivory/30 mt-4 tracking-wide">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
