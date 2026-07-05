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
    <section className="py-20 md:py-32 bg-velmora-charcoal text-velmora-cream">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl">Join the Family</h2>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
          
          <p className="text-lg font-light">
            Sign up for 10% off your first order, plus exclusive access to new collections and styling tips.
          </p>

          {isSubmitted ? (
            <div className="py-8">
              <p className="text-velmora-gold text-lg">Thank you for joining! Check your inbox for your discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-6 py-3 bg-transparent border border-velmora-taupe/50 
                         text-velmora-cream placeholder-velmora-taupe/50 
                         focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-white px-8 py-3 uppercase tracking-wider text-sm 
                         hover:bg-velmora-gold-dark transition-colors whitespace-nowrap"
              >
                Get 10% Off
              </button>
            </form>
          )}

          <p className="text-xs text-velmora-taupe">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
}
