// Newsletter Section Component
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velmora-charcoal text-white py-20">
      <div className="container-premium">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Join the Velmora Family
          </h2>
          <div className="divider-hairline w-24 mx-auto my-6 opacity-40" />
          <p className="text-gray-300 mb-8 leading-relaxed">
            Subscribe to receive 10% off your first order, plus exclusive access to
            new collections, styling tips, and special offers.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-gold bg-opacity-20 rounded-lg p-6">
              <p className="text-lg">Thank you for subscribing! ✨</p>
              <p className="text-sm text-gray-300 mt-2">
                Check your inbox for your 10% discount code.
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
                className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="btn-premium bg-velmora-gold text-white hover:bg-velmora-gold-dark border-2 border-velmora-gold hover:border-velmora-gold-dark"
              >
                Get 10% Off
              </button>
            </form>
          )}

          <p className="text-xs text-gray-400 mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
