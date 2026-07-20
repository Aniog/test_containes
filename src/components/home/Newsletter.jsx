import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="section-padding py-16 md:py-20">
      <div className="max-w-[700px] mx-auto text-center bg-velmora-ink py-14 px-8 md:px-16">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-5 font-medium">
          Join Velmora
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-wide mb-4 leading-snug">
          Receive 10% off your first order
        </h2>
        <p className="text-velmora-sand/50 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and style inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-transparent border-b border-velmora-smoke/30 px-3 py-3 text-sm text-velmora-cream placeholder:text-velmora-smoke/40 focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button type="submit" className="btn-primary text-xs">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
