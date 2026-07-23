import { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-sm text-cream/60">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-gold">
            Thank you for subscribing! Check your inbox for your welcome offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none rounded-none"
              required
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-3 text-xs uppercase tracking-[0.15em] font-sans font-medium border-none hover:bg-gold-dark transition-colors rounded-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
