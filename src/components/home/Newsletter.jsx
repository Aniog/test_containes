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
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Mail size={48} className="text-gold mx-auto mb-6" strokeWidth={1} />
          <h2 
            className="font-serif text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Join the Velmora Family
          </h2>
          <p className="text-lg text-charcoal/70 mb-2">
            Subscribe to our newsletter and receive <span className="text-gold font-medium">10% off</span> your first order
          </p>
          <p className="text-sm text-charcoal/50">
            Be the first to know about new collections, exclusive offers, and jewelry care tips
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-green-800 font-medium">Thank you for subscribing! 🎉</p>
            <p className="text-sm text-green-600 mt-2">Your discount code will be sent to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-input flex-1"
                required
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-xs text-charcoal/40 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
