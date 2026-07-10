import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
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
    <section className="py-20 md:py-32 bg-charcoal text-cream">
      <div className="container-custom max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 tracking-wide">
            Join the Velmora Family
          </h2>
          <div className="hairline border-gray-border/30 mb-6" />
          <p className="font-sans text-lg text-cream/80 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive <span className="text-gold font-medium">10% off</span> your first order. 
            Be the first to know about new collections, exclusive offers, and jewelry care tips.
          </p>
        </div>

        {/* Newsletter Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 font-sans text-sm bg-cream/10 border border-cream/30 
                         text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold 
                         transition-colors duration-300"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-gold text-charcoal font-sans text-sm font-medium 
                         tracking-wider uppercase hover:bg-gold-light transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Get 10% Off'}
              </button>
            </div>
            <p className="font-sans text-xs text-cream/50 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-4">Thank You!</h3>
            <p className="font-sans text-cream/80">
              Your discount code has been sent to your email. Check your inbox!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}