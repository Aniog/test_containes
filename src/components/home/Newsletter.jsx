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
    <section className="py-16 md:py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Join the Inner Circle
          </h2>
          <p className="mt-3 text-muted text-sm md:text-base">
            Subscribe for 10% off your first order, plus early access to new collections.
          </p>

          {submitted ? (
            <div className="mt-8 py-4 px-6 bg-gold/10 border border-gold/20">
              <p className="text-sm text-charcoal font-medium">
                Welcome to Velmora. Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white border border-border text-charcoal text-sm placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-white text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted/60">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
