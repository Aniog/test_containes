import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In production, this would send to an API
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-velmora-charcoal text-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2
          className="font-serif text-4xl md:text-5xl mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Join the Velmora Family
        </h2>

        <div className="hairline w-24 mx-auto mb-8 opacity-30" />

        <p className="font-sans text-lg mb-12 text-white/80 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive 10% off your first order.
          Plus, get early access to new collections and exclusive offers.
        </p>

        {!isSubmitted ? (
          /* Signup Form */
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="newsletter-input !bg-white/10 !border-white/20 !text-white placeholder:text-white/40 focus:!border-velmora-gold"
            />
            <button
              type="submit"
              className="btn-premium bg-velmora-gold hover:bg-velmora-gold-light text-white whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        ) : (
          /* Success Message */
          <div className="animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-velmora-gold/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-velmora-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-sans text-lg text-velmora-gold">
              Thank you for joining! Check your email for your 10% discount code.
            </p>
          </div>
        )}

        {/* Trust Note */}
        <p className="font-sans text-xs text-white/40 mt-8">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
