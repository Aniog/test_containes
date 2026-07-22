import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal-900">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative line */}
          <div className="w-12 h-px bg-gold-500 mx-auto mb-8" />

          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-4">
            Join the Velmora Circle
          </h2>
          
          <p className="font-sans text-base text-charcoal-400 mb-8 max-w-md mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration. 
            Plus, enjoy 10% off your first order.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-transparent border border-charcoal-700 text-cream-50 
                           placeholder:text-charcoal-500 font-sans text-sm
                           focus:border-gold-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-gold-600 text-white font-sans text-sm font-medium 
                           tracking-wider uppercase hover:bg-gold-500 transition-colors
                           disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-gold-400 animate-fade-in">
              <Check className="w-5 h-5" />
              <span className="font-sans text-sm">
                Welcome to the Velmora Circle! Check your inbox for your 10% off code.
              </span>
            </div>
          )}

          <p className="text-xs text-charcoal-500 mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
