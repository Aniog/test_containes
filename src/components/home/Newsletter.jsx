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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-brand-warm rounded-sm p-8 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light">
            Join the Velmora World
          </h2>
          <p className="mt-3 text-sm text-brand-cream/70 font-sans max-w-md mx-auto">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {submitted ? (
            <p className="mt-8 text-sm text-brand-gold-light font-sans font-medium">
              Thank you! Check your inbox for your welcome gift.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-brand-cream/20 text-brand-cream placeholder:text-brand-cream/40 text-sm font-sans rounded-sm focus:outline-none focus:border-brand-gold-muted transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-brand-gold text-white text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-gold-light transition-colors duration-300 border-none rounded-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
