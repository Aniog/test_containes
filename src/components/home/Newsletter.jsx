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
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-cream/60 font-sans text-sm md:text-base">
          Subscribe for 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-sans text-sm">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors whitespace-nowrap"
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
