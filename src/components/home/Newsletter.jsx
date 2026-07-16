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
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
          Join the Inner Circle
        </h2>
        <p className="mt-4 font-sans text-sm text-brand-warm-gray">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-brand-gold">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-transparent border border-white/30 text-white font-sans text-sm placeholder:text-brand-warm-gray focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-brand-gold text-white font-sans text-xs uppercase tracking-wide-xl hover:bg-brand-gold-dark transition-colors border-none cursor-pointer"
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
