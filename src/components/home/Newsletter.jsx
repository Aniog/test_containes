import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-warm-900 py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-cream-400 mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-cream font-medium mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-sm text-cream-400 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and the stories behind our pieces.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 h-12 px-5 text-sm bg-cream-100 border border-cream-400/20 text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-gold transition-colors"
          />
          <button type="submit" className="btn-gold h-12 px-8 text-xs whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}