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
    <section className="bg-brand-charcoal py-16 md:py-20">
      <div className="max-w-xl mx-auto text-center px-5">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-brand-cream/70 mt-3">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-brand-gold mt-8">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border border-brand-cream/30 text-brand-cream font-sans text-sm px-5 py-3.5 placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold transition-colors rounded-none"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white font-sans text-xs tracking-widest uppercase px-8 py-3.5 border-none hover:bg-brand-gold-light transition-colors rounded-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
