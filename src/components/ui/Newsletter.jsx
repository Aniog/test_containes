import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="bg-velmora-espresso px-6 py-16 text-center md:py-20">
      <div className="mx-auto max-w-xl">
        <p className="mb-3 font-serif text-xs font-medium uppercase tracking-superwide text-velmora-gold">
          Velmora Circle
        </p>
        <h2 className="mb-4 font-serif text-3xl font-light italic text-velmora-cream md:text-4xl">
          Join for 10% off your first order
        </h2>
        <p className="mb-8 font-display text-sm font-light text-velmora-champagne/80">
          Be the first to know about new arrivals, exclusive offers, and styling notes.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 border-b border-velmora-gold/40 bg-transparent px-0 py-3 text-sm text-velmora-cream placeholder:text-velmora-stone focus:border-velmora-gold focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-velmora-gold px-8 py-3 text-xs font-medium uppercase tracking-widest text-velmora-espresso transition-colors duration-300 hover:bg-velmora-gold-light"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-velmora-gold-light" role="status">
            Welcome to the Velmora circle. Check your inbox for your code.
          </p>
        )}
      </div>
    </section>
  );
}
