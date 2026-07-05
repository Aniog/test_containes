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
    <section className="py-20 bg-amber-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-light tracking-[0.1em] text-white font-['Cormorant_Garamond'] mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-white/90 mb-8 tracking-wider text-sm">
          Get 10% off your first order plus exclusive access to new collections
        </p>

        {isSubmitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded p-6 max-w-md mx-auto">
            <p className="text-white font-light text-lg">
              Thank you for joining us! Check your email for your discount code.
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
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-amber-800 font-semibold tracking-[0.15em] text-sm hover:bg-gray-100 transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        )}

        <p className="mt-6 text-white/70 text-xs">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
