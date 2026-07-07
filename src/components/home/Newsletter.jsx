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
    <section className="py-20 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Join the Velmora Family
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        
        <p className="font-sans text-lg text-warmgray mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive 10% off your first order. 
          Be the first to know about new collections, exclusive offers, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-green-900 bg-opacity-30 rounded-lg p-6 max-w-md mx-auto">
            <p className="font-serif text-xl mb-2">Thank you for joining us!</p>
            <p className="text-sm text-warmgray">
              Check your email for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-transparent border border-gray-600 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold font-sans text-sm"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-white font-sans text-sm tracking-wider hover:bg-gold-dark transition-colors btn-premium"
              >
                Get 10% Off
              </button>
            </div>
            <p className="text-xs text-warmgray mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
