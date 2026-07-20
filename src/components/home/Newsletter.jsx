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
    <section className="py-16 sm:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Join the Velmora World</h2>
        <p className="mt-3 font-sans text-sm text-muted-fg">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-accent">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-cream border border-border font-sans text-sm text-charcoal placeholder:text-muted-fg/60 focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-cream font-sans text-sm uppercase tracking-wider hover:bg-accent-light transition-colors border-none"
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
