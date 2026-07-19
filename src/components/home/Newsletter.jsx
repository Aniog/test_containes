import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-velmora-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
        <div className="w-24 h-0.5 bg-velmora-gold mx-auto mb-6" />
        <p className="font-sans text-lg mb-2">Get 10% off your first order</p>
        <p className="text-sm text-gray-400 mb-8">
          Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold text-white px-8 py-4 inline-block">
            <p className="font-sans text-sm tracking-wider uppercase">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-charcoal-light text-white placeholder-gray-400 focus:outline-none focus:border-velmora-gold transition-colors font-sans text-sm"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold-dark transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
