import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

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
    <section className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={32} className="text-gold mx-auto mb-6" />

          <h2 className="font-serif text-4xl font-light mb-4 tracking-wide">
            Join for 10% Off
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Subscribe to our newsletter and receive 10% off your first order.
            Be the first to know about new collections, exclusive offers, and jewelry care tips.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-sm">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm tracking-wide"
              />
              <button
                type="submit"
                className="bg-charcoal text-cream px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
