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
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gold-light">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-base text-muted">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-base text-charcoal font-medium">
              Thank you! Check your inbox for your welcome gift.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border-subtle bg-white text-charcoal text-sm placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gold text-white px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium hover:bg-gold-hover transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
