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
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">
          Join the Velmora World
        </h2>
        <p className="font-sans text-sm text-cream/70 mt-4">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        {submitted ? (
          <p className="font-sans text-sm text-gold mt-8">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-cream/30 text-cream px-4 py-3 font-sans text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-3 font-sans text-xs tracking-wide-btn uppercase hover:bg-gold-light transition-colors duration-300"
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
