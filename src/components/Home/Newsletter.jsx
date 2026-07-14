import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 bg-velmora-black text-white">
      <div className="container-velmora max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-light mb-6"
          style={{ fontFamily: 'Cormorant Garamond', serif: true }}
        >
          Join the Velmora Family
        </h2>
        <div className="hairline w-24 mx-auto mb-8" style={{ background: 'linear-gradient(to right, transparent, rgba(201, 169, 110, 0.5) 20%, rgba(201, 169, 110, 0.5) 80%, transparent)' }} />
        <p className="text-lg mb-10 text-velmora-beige max-w-2xl mx-auto">
          Subscribe for exclusive access to new collections, styling tips, and
          <span className="text-velmora-gold-light font-medium"> 10% off your first order</span>.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold/50 rounded px-8 py-6 max-w-md mx-auto">
            <p className="text-velmora-gold-light">
              Thank you for subscribing! Check your email for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="newsletter-input text-velmora-black"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-black)' }}
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-sm text-velmora-charcoal mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}