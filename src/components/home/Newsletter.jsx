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
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-sm text-white/60 font-sans">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-sans text-sm">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white font-sans text-sm placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors rounded-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white font-sans text-sm uppercase tracking-wider border-none hover:bg-gold-dark transition-colors duration-300"
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
