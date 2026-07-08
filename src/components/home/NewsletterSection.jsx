import React, { useState } from 'react';

export default function NewsletterSection() {
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
    <section className="py-16 md:py-24 bg-charcoal text-white">
      <div className="container-premium max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Join the Velmora Family
        </h2>
        <div className="hairline w-16 mx-auto mb-6 bg-gold/50"></div>
        <p className="text-ivory/80 mb-10 leading-relaxed">
          Subscribe to our newsletter and receive 10% off your first order.
          Be the first to know about new collections, exclusive offers, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-gold/20 p-6 rounded-sm">
            <p className="font-serif text-lg mb-2">Thank you for joining us!</p>
            <p className="text-sm text-ivory/70">
              Check your inbox for your 10% discount code.
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
              className="flex-1 px-6 py-4 bg-charcoal-light border border-ivory/20 text-white placeholder:text-ivory/40 focus:border-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="btn-gold px-8 py-4 whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}

        <p className="text-xs text-ivory/50 mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
