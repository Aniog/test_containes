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
    <section className="bg-velmora-charcoal text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-velmora-warm mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive access to new collections,
          styling tips, and a special discount on your first order.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold/50 p-6 max-w-md mx-auto">
            <p className="text-velmora-gold-light">
              Thank you for subscribing! Check your email for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-velmora-graphite text-white placeholder-velmora-mist border border-velmora-graphite focus:border-velmora-gold focus:outline-none transition-colors"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white font-medium tracking-wider uppercase text-sm hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-mist mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
