import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-stone-950">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
          Join the Inner Circle
        </h2>
        <p className="mt-4 text-stone-400 text-sm md:text-base">
          Be the first to know about new arrivals, exclusive offers, and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-medium">Thank you for subscribing ✓</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-stone-900 border border-stone-700 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white text-sm font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors border-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-stone-600">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
