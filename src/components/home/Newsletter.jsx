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
    <section className="py-16 md:py-24 bg-[#C9A962]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {subscribed ? (
            <div className="bg-white/10 py-4 px-6 text-white">
              Thank you for subscribing! Check your email for your 10% discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#1A1A1A] text-white text-sm uppercase tracking-widest hover:bg-[#0D0D0D] transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-white/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}