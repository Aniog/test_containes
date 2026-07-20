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
        <h2 className="font-serif text-3xl md:text-4xl text-cream">Join the Inner Circle</h2>
        <p className="mt-4 text-cream/60 text-sm">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-gold text-sm font-medium">Thank you! Check your inbox for your welcome gift.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors rounded-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold hover:bg-gold-dark text-cream text-sm uppercase tracking-wider font-medium transition-colors border-none rounded-sm cursor-pointer"
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
