import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would typically send to your API
    }
  };

  return (
    <section className="py-20 bg-[#2A2520] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif-display text-4xl md:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive exclusive offers, early access to new 
          collections, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-[#B8860B]/20 border border-[#B8860B] rounded-lg p-6 max-w-md mx-auto">
            <p className="text-lg">Thank you for subscribing! 🎉</p>
            <p className="text-sm text-white/70 mt-2">Check your email for your 10% discount code.</p>
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
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8860B] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#B8860B] text-white px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-[#A0780A] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/50 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
