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
    <section
      className="section py-16"
      style={{ backgroundColor: 'var(--color-charcoal)' }}
    >
      <div className="container mx-auto text-center max-w-xl">
        <h2
          className="font-serif text-3xl md:text-4xl text-white mb-3"
        >
          Join for 10% Off
        </h2>
        <p
          className="font-sans text-sm text-white/70 mb-8"
        >
          Subscribe to our newsletter and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="font-sans text-white text-lg">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border text-white placeholder-white/50 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)]"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
            >
              Subscribe
            </button>
          </form>
        )}

        <p
          className="font-sans text-xs text-white/50 mt-4"
        >
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}