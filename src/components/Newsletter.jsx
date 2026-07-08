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
    <section className="py-20 px-6 lg:px-8 bg-velmora-charcoal text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive exclusive offers, early access to new collections, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-velmora-gold mb-4">
              Thank you for joining us!
            </p>
            <p className="font-sans text-sm text-gray-400">
              Your 10% discount code will arrive in your inbox shortly.
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
              className="newsletter-input flex-1 bg-transparent text-white placeholder-gray-500"
            />
            <button 
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-gray-500 mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
