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
    <section className="py-12 md:py-20 bg-warm-dark newsletter-pattern">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl text-white">
            Join for 10% Off
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60">
            Be the first to know about new arrivals, exclusive drops, and receive 10% off your first order.
          </p>

          {submitted ? (
            <p className="mt-6 text-gold-accent text-sm">
              Thank you! Check your inbox for your welcome code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold-accent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-accent text-white text-sm uppercase tracking-wider hover:bg-gold-accent/90 transition-colors whitespace-nowrap"
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