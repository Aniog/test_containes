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
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-cream mb-4">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-brand-light-muted mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-brand-gold">
            Welcome to Velmora. Check your inbox for your exclusive offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white/20 text-brand-cream font-sans text-sm placeholder:text-brand-light-muted focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-gold text-white font-sans text-xs tracking-widest uppercase hover:bg-brand-gold-light transition-colors border-none cursor-pointer"
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
