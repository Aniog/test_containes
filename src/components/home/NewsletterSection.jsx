import React, { useState } from 'react';

export default function NewsletterSection() {
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
    <section className="py-20 md:py-32 bg-velmora-charcoal text-velmora-cream">
      <div className="container-velmora">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <h2
            className="font-serif text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Join the Velmora Family
          </h2>
          <div className="hairline w-24 mx-auto mb-8" style={{ background: 'linear-gradient(to right, transparent, #C9A96E, transparent)' }} />

          {!isSubmitted ? (
            <>
              <p className="text-velmora-cream/80 text-lg mb-10 leading-relaxed">
                Subscribe to our newsletter and receive <span className="text-velmora-gold font-medium">10% off</span> your first order.
                Be the first to discover new collections, exclusive offers, and jewelry care tips.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 bg-velmora-cream/10 border border-velmora-gold/30 text-velmora-cream placeholder:text-velmora-cream/40 focus:outline-none focus:border-velmora-gold transition-colors"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-velmora-gold text-velmora-cream px-8 py-4 text-sm tracking-widest hover:bg-velmora-gold-dark transition-colors disabled:opacity-50 btn-premium whitespace-nowrap"
                  >
                    {isLoading ? 'SUBSCRIBING...' : 'GET 10% OFF'}
                  </button>
                </div>
                <p className="text-xs text-velmora-cream/50 mt-4">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                </p>
              </form>
            </>
          ) : (
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-velmora-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-velmora-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Welcome to Velmora!
              </h3>
              <p className="text-velmora-cream/80">
                Thank you for subscribing! Check your email for your 10% discount code.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
