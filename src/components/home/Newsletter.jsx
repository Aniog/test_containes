import { useState } from 'react';

export default function Newsletter() {
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
    <section className="py-16 md:py-24 bg-espresso">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-sm text-cream/60 font-light">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-gold font-light">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream text-sm font-light placeholder:text-cream/40 focus:outline-none focus:border-gold rounded-sm"
              required
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-3 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors border-none rounded-sm"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
