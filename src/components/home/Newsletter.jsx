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
    <section className="py-20 bg-velmora-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl mb-4">Join the Velmora Family</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto mb-6" />
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Get 10% off your first order, plus exclusive access to new collections and styling tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold/50 rounded-sm p-6 max-w-md mx-auto">
            <p className="text-velmora-gold-light">
              Thank you for joining! Check your email for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-4 text-sm tracking-widest transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
