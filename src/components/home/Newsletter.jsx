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
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-cream mb-3">
          Join the Velmora World
        </h2>
        <p className="text-sm text-brand-muted-light mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-brand-gold-light text-sm font-medium">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white/20 text-brand-cream text-sm placeholder:text-brand-muted-light focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-brand-gold text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-brand-gold-dark transition-colors"
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
