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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-cream">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-brand-warm-gray mt-4">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-sans text-sm text-brand-gold">
              Welcome to Velmora. Check your inbox for your exclusive offer.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-brand-warm-gray/40 text-brand-cream text-sm font-sans placeholder:text-brand-warm-gray focus:outline-none focus:border-brand-gold transition-colors rounded-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-gold text-white text-sm tracking-wider uppercase font-sans hover:bg-brand-gold-dark transition-colors border-none rounded-none"
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
