import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-velmora-espresso py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-4">Stay Connected</p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-velmora-cream">
          Join for 10% off your first order
        </h2>
        <p className="mt-3 text-sm text-velmora-cream/50">
          Be the first to know about new collections, exclusive offers, and the stories behind each piece.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-transparent border-b border-velmora-cream/30 px-3 py-3 text-sm text-velmora-cream placeholder:text-velmora-cream/30 focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-velmora-gold text-white text-xs tracking-[0.2em] uppercase hover:bg-velmora-gold-dark transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-[10px] text-velmora-cream/30">No spam, unsubscribe anytime.</p>
      </div>
    </section>
  );
}
