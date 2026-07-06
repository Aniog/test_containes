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
    <section className="py-16 md:py-24 px-5 md:px-8 lg:px-12 bg-dark-surface">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-dark-text">
          Join the Inner Circle
        </h2>
        <p className="text-sm text-dark-text/60 mt-4">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-accent font-medium text-sm">
              Welcome to Velmora. Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-dark-text/30 text-dark-text text-sm placeholder:text-dark-text/40 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white text-sm font-medium tracking-wide uppercase hover:bg-accent-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-dark-text/30 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
