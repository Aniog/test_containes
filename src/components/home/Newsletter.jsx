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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-espresso px-8 md:px-16 py-12 md:py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-cream">
            Join the Velmora World
          </h2>
          <p className="mt-3 text-sm text-cream/60">
            Subscribe for 10% off your first order, plus early access to new collections.
          </p>

          {submitted ? (
            <p className="mt-6 text-sm text-gold font-medium">
              Welcome to Velmora. Check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold hover:bg-gold-dark text-cream font-sans text-sm font-semibold uppercase tracking-product transition-colors border-none cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
