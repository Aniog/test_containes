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
    <section className="py-20 md:py-24 bg-velmora-blush">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">
          Join the Circle
        </p>
        <h2
          className="text-3xl md:text-4xl font-light text-velmora-text mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          10% off your first order
        </h2>
        <p className="text-sm text-velmora-muted mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p
              className="text-xl font-light text-velmora-text"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Welcome to Velmora ✦
            </p>
            <p className="text-sm text-velmora-muted mt-2">
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
              className="flex-1 px-5 py-3.5 text-sm bg-velmora-ivory border border-velmora-gold/30 text-velmora-text placeholder:text-velmora-muted/60 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-velmora-muted/60 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
