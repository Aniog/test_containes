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
    <section className="bg-espresso">
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20 text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Join the Velmora World</h2>
        <p className="font-sans text-sm text-white/60 mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-gold">Thank you! Check your inbox for your welcome gift.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white text-xs font-sans font-medium tracking-product uppercase border-none hover:bg-gold-dark transition-colors whitespace-nowrap"
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
