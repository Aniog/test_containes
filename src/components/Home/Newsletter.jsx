import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-32 bg-velmora-charcoal text-velmora-cream">
      <div className="container-premium">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join the Velmora Family
          </h2>
          <div className="hairline w-24 mx-auto mb-6" />

          <p className="text-velmora-warm-gray mb-10 leading-relaxed">
            Subscribe to receive 10% off your first order, plus exclusive access to
            new collections, styling tips, and member-only offers.
          </p>

          {/* Success State */}
          {isSubmitted ? (
            <div className="bg-velmora-gold/20 border border-velmora-gold/50 p-6 rounded-sm">
              <p className="text-velmora-gold-light font-serif text-lg">
                Thank you for joining us!
              </p>
              <p className="text-sm text-velmora-warm-gray mt-2">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            /* Email Form */
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="newsletter-input text-velmora-cream placeholder-velmora-warm-gray/50"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-premium btn-premium-solid whitespace-nowrap"
                >
                  {isLoading ? 'Joining...' : 'Get 10% Off'}
                </button>
              </div>
              <p className="text-xs text-velmora-warm-gray/70 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
