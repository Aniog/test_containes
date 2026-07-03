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
    <section className="py-20 bg-charcoal">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-cream/70 mb-8">
            Subscribe to receive 10% off your first order and be the first to know about new collections and exclusive offers.
          </p>

          {subscribed ? (
            <div className="bg-champagne/20 border border-champagne/30 p-4 text-champagne">
              Thank you for subscribing! Check your email for your 10% discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 focus:outline-none focus:border-champagne transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-champagne text-charcoal font-medium tracking-wide hover:bg-soft-gold transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-cream/50 text-xs mt-4">
            By subscribing, you agree to receive marketing communications. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}