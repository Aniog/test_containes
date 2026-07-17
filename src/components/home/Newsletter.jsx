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
    <section className="bg-[#C9A96E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% Off
          </h2>
          <p className="text-white text-opacity-90 mb-2">
            Your First Order
          </p>
          <p className="text-sm text-white text-opacity-75 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips.
          </p>

          {isSubmitted ? (
            <div className="bg-white bg-opacity-20 rounded p-6">
              <p className="text-white font-serif text-lg">
                Thank you for subscribing!
              </p>
              <p className="text-white text-opacity-90 text-sm mt-2">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-white text-[#1A1A1A] placeholder-[#8A8580] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="btn-premium bg-white text-[#C9A96E] hover:bg-[#1A1A1A] hover:text-white uppercase"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-white text-opacity-60 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
