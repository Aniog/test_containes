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
    <section className="bg-obsidian py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory leading-snug">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-taupe-light mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-4">
            <p className="font-serif text-xl italic text-gold">
              Welcome to Velmora. ✦
            </p>
            <p className="font-sans text-sm text-taupe-light mt-2">
              Your 10% discount code is on its way to your inbox.
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
              className="flex-1 bg-transparent border border-white/20 text-ivory placeholder-taupe font-sans text-sm px-5 py-4 outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-light transition-colors duration-300 font-semibold flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-taupe mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
