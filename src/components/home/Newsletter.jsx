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
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">
          Join the Velmora World
        </h2>
        <p className="text-cream/60 text-sm mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-gold text-sm">Thank you for subscribing. Check your inbox for your welcome gift.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-3 text-sm uppercase tracking-cta font-medium hover:bg-gold-light transition-colors whitespace-nowrap"
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
