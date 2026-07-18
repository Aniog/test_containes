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
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center bg-velmora-sand/50 border border-velmora-border px-6 py-12 md:px-16 md:py-16">
        <span className="text-[10px] tracking-[0.2em] uppercase text-velmora-gold">
          The Velmora Edit
        </span>
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-charcoal mt-3">
          Join for 10% off your first order
        </h2>
        <p className="mt-3 text-sm text-velmora-warmgray max-w-sm mx-auto">
          Be the first to know about new collections, exclusive restocks, and the stories behind each piece.
        </p>

        {submitted ? (
          <div className="mt-8 py-4">
            <p className="font-serif text-lg text-velmora-gold tracking-wide">
              Welcome to Velmora.
            </p>
            <p className="text-sm text-velmora-warmgray mt-1">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white border border-velmora-border px-4 py-3 text-sm text-velmora-charcoal placeholder:text-velmora-warmgray/50 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-velmora-warmgray/60">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
