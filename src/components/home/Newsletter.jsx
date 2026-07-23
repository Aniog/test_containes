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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-sans uppercase tracking-widest text-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory leading-snug">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm font-sans text-ivory/60 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-4">
            <p className="font-serif text-xl font-light text-gold italic">
              Welcome to Velmora ✦
            </p>
            <p className="text-xs font-sans text-ivory/60 mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-obsidian-light border border-obsidian-light focus:border-gold text-ivory placeholder-taupe text-sm font-sans px-5 py-4 outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian hover:bg-gold-dark px-6 py-4 text-xs uppercase tracking-widest font-sans font-semibold transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="mt-4 text-[10px] font-sans text-taupe-light">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
