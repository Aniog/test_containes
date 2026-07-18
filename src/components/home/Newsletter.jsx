import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-light text-xs tracking-widest uppercase font-sans font-medium mb-3">
            Stay Connected
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white">
            Join for <span className="text-gold">10% Off</span>
          </h2>
          <p className="text-warm-gray-300 font-sans text-sm mt-3 leading-relaxed">
            Be the first to know about new collections, exclusive drops, and receive 10% off your first order.
          </p>

          {submitted ? (
            <p className="mt-8 text-gold-light font-sans text-sm">
              Thank you! Check your inbox for your welcome code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-white/10 border border-warm-gray-600 text-white placeholder-warm-gray-400 font-sans text-sm focus:outline-none focus:border-gold transition-colors duration-300 rounded-none"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-gold text-white font-sans text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 rounded-none whitespace-nowrap"
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