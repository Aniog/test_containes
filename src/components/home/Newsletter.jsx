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
    <section className="py-20 md:py-28 bg-base-charcoal">
      <div className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-base-cream mb-4">
            Join for 10% Off
          </h2>
          <p className="text-base-subtle mb-8">
            Sign up for exclusive access to new releases, styling tips, and special offers.
          </p>

          {isSubmitted ? (
            <div className="bg-gold/10 border border-gold/30 rounded px-6 py-4">
              <p className="text-gold font-medium">
                Welcome to Velmora. Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-transparent border border-base-subtle/50 text-base-cream placeholder:text-base-subtle/60 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-base-subtle/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
