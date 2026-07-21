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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-charcoal text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
          Join the Velmora Family
        </h2>
        
        <div className="hairline w-24 mx-auto mb-6 bg-velmora-gold" />
        
        <p className="text-velmora-taupe mb-10 max-w-2xl mx-auto leading-relaxed">
          Subscribe to receive 10% off your first order, plus exclusive access to new 
          collections, styling tips, and member-only events.
        </p>

        {isSubmitted ? (
          <div className="animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-velmora-gold/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-velmora-gold text-2xl">✓</span>
            </div>
            <p className="font-serif text-xl mb-2">Welcome to Velmora!</p>
            <p className="text-velmora-taupe">
              Your 10% discount code will arrive in your inbox shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="newsletter-input text-velmora-charcoal"
            />
            <button
              type="submit"
              className="btn-premium bg-velmora-gold hover:bg-velmora-gold-dark text-white whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-taupe mt-6">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
}
