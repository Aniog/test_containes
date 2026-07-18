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
    <section className="section-padding bg-charcoal text-white">
      <div className="container-velmora">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">
            Join the Velmora Circle
          </h2>
          <p className="body-text text-warm-gray-light mb-12 text-lg">
            Subscribe for exclusive access to new collections, styling tips, and 10% off your first order.
          </p>

          {isSubmitted ? (
            <div className="py-8">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-serif">Thank you for joining us!</p>
              <p className="text-warm-gray-light mt-2">Check your inbox for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-transparent border border-warm-gray-light text-white placeholder-warm-gray-light focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="btn-gold whitespace-nowrap"
                >
                  Get 10% Off
                </button>
              </div>
            </form>
          )}

          <p className="text-xs text-warm-gray-light mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
