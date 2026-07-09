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
    <section className="bg-obsidian py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-3">Join the Circle</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center">
                <span className="text-gold text-lg">✓</span>
              </div>
              <p className="font-serif text-xl text-ivory font-light">
                Welcome to Velmora.
              </p>
              <p className="font-sans text-xs text-ivory/50">
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
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-ivory font-sans text-xs uppercase tracking-widest-md font-medium px-6 py-3.5 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-ivory/25 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
