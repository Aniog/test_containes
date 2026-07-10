import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-inter text-sm text-ivory/60 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="border border-gold/40 px-8 py-5">
              <p className="font-cormorant text-xl text-gold italic">
                Welcome to Velmora. Your code is on its way.
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
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white font-inter text-xs uppercase tracking-widest px-7 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-ivory/30 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
