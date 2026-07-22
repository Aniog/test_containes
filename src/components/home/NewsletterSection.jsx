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
    <section className="section-padding bg-velmora-charcoal text-white">
      <div className="container-max max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide">
          Join the Velmora Family
        </h2>
        <p className="text-velmora-gold-light mb-8 font-light">
          Get 10% off your first order plus exclusive access to new collections
        </p>

        {isSubmitted ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-velmora-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-velmora-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg">Thank you for joining us!</p>
            <p className="text-sm text-gray-400">
              Check your email for your 10% discount code.
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
              className="flex-grow px-6 py-3 bg-transparent border border-gray-600 text-white 
                       placeholder-gray-400 focus:outline-none focus:border-velmora-gold 
                       transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white text-sm uppercase 
                       tracking-ultra-wide font-medium hover:bg-velmora-gold-dark 
                       transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}
