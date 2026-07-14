import React, { useState } from 'react';

const NewsletterSection = () => {
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
    <section className="py-20 md:py-32 bg-velmora-charcoal text-velmora-warm-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        {/* Gold Accent Line */}
        <div className="w-16 h-0.5 bg-velmora-gold mx-auto mb-12" />

        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
          Join for 10% Off
        </h2>
        <p className="text-lg text-velmora-warm-white/80 mb-12 font-light leading-relaxed">
          Subscribe to our newsletter and receive exclusive offers, early access to new collections, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold/50 p-6 max-w-md mx-auto">
            <p className="font-serif text-lg text-velmora-gold">
              Thank you for joining!
            </p>
            <p className="text-sm text-velmora-warm-white/70 mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-transparent border border-velmora-dark-gray/50 
                           text-velmora-warm-white placeholder:text-velmora-medium-gray
                           focus:border-velmora-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-gold text-velmora-warm-black 
                           hover:bg-velmora-gold-muted transition-all duration-300 
                           font-medium tracking-wide text-sm"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-velmora-medium-gray mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
