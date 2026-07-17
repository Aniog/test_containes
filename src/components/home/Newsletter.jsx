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
    <section className="bg-obsidian py-20 lg:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-ivory font-light mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-stone leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-champagne-light italic">
              Welcome to Velmora. Your code is on its way. ✦
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
              className="flex-1 bg-transparent border border-mist/40 text-ivory placeholder-stone font-sans text-sm px-5 py-4 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest font-semibold px-7 py-4 hover:bg-champagne-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-stone/60 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
