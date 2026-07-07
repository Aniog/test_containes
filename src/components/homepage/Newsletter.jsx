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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-6">
          Join for 10% Off
        </h2>
        
        <p className="text-charcoal/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive exclusive offers, early access to new collections, and jewelry care tips.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="newsletter-input flex-grow px-6 py-3 border-2 border-gold/30 focus:border-gold bg-cream text-charcoal placeholder-charcoal/40 outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase font-sans hover:bg-gold-dark transition-colors duration-300 whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        ) : (
          <div className="bg-cream border-2 border-gold/30 p-8">
            <p className="font-serif text-2xl text-charcoal mb-2">Thank You!</p>
            <p className="text-charcoal/70 font-light">
              Your discount code will be sent to your email shortly.
            </p>
          </div>
        )}

        <p className="text-xs text-charcoal/50 mt-6">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
}
