import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-white/80 max-w-md mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {isSubmitted ? (
          <div className="mt-8 p-4 bg-white/10 text-white">
            <p className="font-serif text-lg">Thank you for subscribing!</p>
            <p className="text-sm text-white/80 mt-1">Check your email for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white text-velmora-charcoal placeholder-velmora-muted focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-velmora-charcoal text-white text-sm uppercase tracking-widest hover:bg-velmora-charcoal/80 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/60">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}