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
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">
          Join the Velmora World
        </h2>
        <p className="text-sm text-cream/60 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-gold font-serif text-lg">
            Thank you for joining us. Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-cream text-xs uppercase tracking-button font-medium hover:bg-gold-dark transition-colors border-none whitespace-nowrap"
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
