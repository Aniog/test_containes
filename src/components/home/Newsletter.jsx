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
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="font-inter text-sm text-ivory/50 mt-4 mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
              <span className="text-gold text-lg">✓</span>
            </div>
            <p className="font-cormorant text-xl font-light italic text-ivory">
              Welcome to Velmora. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
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
              className="bg-gold text-ivory font-inter text-[10px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={12} />
            </button>
          </form>
        )}

        <p className="font-inter text-[9px] text-ivory/25 mt-5 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
