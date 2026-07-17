import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-20 lg:py-32 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2
            className="font-serif text-4xl lg:text-5xl text-velmora-cream"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Join for 10% Off
          </h2>
          <p className="text-velmora-mist leading-relaxed">
            Subscribe to receive exclusive offers, early access to new collections,
            and jewelry care tips from our atelier.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-gold/20 border border-velmora-gold/40 rounded p-6">
              <p className="text-velmora-gold">
                Thank you for subscribing! Check your email for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-6 py-3 bg-velmora-graphite/50 border border-velmora-gold/30 text-velmora-cream placeholder-velmora-mist focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-gold text-white uppercase tracking-wider text-sm hover:bg-velmora-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-velmora-mist">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
