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
    <section className="py-section-sm md:py-section bg-charcoal">
      <div className="section-container text-center">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold mb-3">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-heading text-ivory mb-3">
          Get 10% Off Your First Order
        </h2>
        <p className="font-sans text-ivory/60 text-base mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <p className="font-sans text-gold text-sm">
            Welcome to Velmora! Check your inbox for your 10% off code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-ivory/10 border border-ivory/20 text-ivory placeholder:text-ivory/30 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-ivory/30 text-xs mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
