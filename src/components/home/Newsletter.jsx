import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-charcoal text-cream">
      <div className="container-velmora">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center">
              <Mail size={24} className="text-gold" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Join for 10% Off
          </h2>
          <div className="divider-hairline w-24 mx-auto mb-6 bg-cream/20" />

          {/* Description */}
          <p className="font-sans text-lg text-cream/80 mb-12 leading-relaxed">
            Subscribe to our newsletter and receive exclusive offers, early access to new collections, and jewelry care tips straight to your inbox.
          </p>

          {/* Success Message */}
          {isSubmitted ? (
            <div className="bg-gold/10 border border-gold/30 p-8 rounded-sm">
              <p className="font-serif text-2xl text-gold mb-2">Thank You!</p>
              <p className="font-sans text-cream/80">
                Your discount code is on its way to your inbox. Check your email for 10% off your first order.
              </p>
            </div>
          ) : (
            /* Email Form */
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors font-sans"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-accent whitespace-nowrap disabled:opacity-50"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                  {!isLoading && <ArrowRight size={18} className="inline-block ml-2" />}
                </button>
              </div>

              <p className="font-sans text-xs text-cream/50 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
