import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="bg-velvet-900/50 border border-warm-800/20 rounded-sm px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-warm-50 tracking-wide leading-snug">
          Enjoy 10% off your first order
        </h2>
        <p className="mt-3 text-sm text-warm-400 max-w-sm mx-auto">
          Sign up for early access to new collections, exclusive offers, and
          styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-transparent border border-warm-600/40 rounded-sm px-4 py-3 text-sm text-warm-200 placeholder-warm-600 focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
