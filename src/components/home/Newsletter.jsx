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
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-sm text-white/60 mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-gold font-sans text-sm tracking-wider uppercase">
            Welcome to Velmora — check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-gold-dark transition-colors whitespace-nowrap"
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
