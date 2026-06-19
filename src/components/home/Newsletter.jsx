import React from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--color-deep-brown)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-6" />
        <h2 className="font-serif-display text-3xl md:text-4xl text-[var(--color-cream)] font-light mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-[var(--color-soft-gray)] mb-10">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif-display text-xl text-[var(--color-gold)]">
              Welcome to the Velmora family!
            </p>
            <p className="text-[var(--color-soft-gray)] text-sm mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-[var(--color-gold-dark)]/40 text-[var(--color-cream)] placeholder-[var(--color-soft-gray)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
            />
            <button
              type="submit"
              className="bg-[var(--color-gold)] text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-[var(--color-gold-dark)] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
