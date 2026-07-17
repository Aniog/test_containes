import { useState } from 'react';

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
    <section className="bg-espresso py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-cream/60 text-sm md:text-base font-sans">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold text-sm uppercase tracking-widest font-sans">
            Welcome to Velmora — check your inbox ✓
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-white text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors border-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
