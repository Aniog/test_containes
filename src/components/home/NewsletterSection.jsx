import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-12 h-12 mx-auto mb-6 bg-charcoal rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal mb-4">
            Join the Velmora World
          </h2>

          {/* Subtext */}
          <p className="text-charcoal/70 text-base mb-8 max-w-md mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration. 
            Plus, enjoy 10% off your first order.
          </p>

          {/* Form or Success */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-charcoal animate-fade-in">
              <Check className="w-5 h-5" />
              <span className="font-medium">Welcome to Velmora! Check your inbox for 10% off.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 bg-ivory text-charcoal placeholder:text-warm-gray text-sm focus:outline-none focus:ring-2 focus:ring-charcoal/20"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-charcoal text-ivory text-xs font-semibold tracking-[0.15em] uppercase hover:bg-charcoal-light transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-charcoal/50 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
