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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-velmora-charcoal/80 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-velmora-charcoal font-medium">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-velmora-cream border border-velmora-charcoal/20 focus:outline-none focus:border-velmora-charcoal"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-charcoal text-velmora-cream text-sm uppercase tracking-widest hover:bg-velmora-charcoal/80 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}