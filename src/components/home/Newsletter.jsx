import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gold-antique">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-white/80 font-sans">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {subscribed ? (
            <div className="mt-8 p-4 bg-white/10 text-white">
              <p className="font-serif">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-white text-charcoal placeholder-stone-warm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-charcoal text-white font-sans text-sm uppercase tracking-wider hover:bg-charcoal/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}