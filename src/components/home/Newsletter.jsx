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
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container-premium text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl mb-4">Join the Velmora Family</h2>
        <div className="hairline w-24 mx-auto bg-[#C9A96E] mb-6" />
        <p className="text-lg mb-10 text-gray-300">
          Get 10% off your first order, plus exclusive access to new collections and styling tips.
        </p>

        {isSubmitted ? (
          <div className="bg-[#C9A96E] text-white p-4 rounded">
            Thank you for joining! Check your email for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="newsletter-input flex-1 bg-transparent text-white border-[#6B6B6B]"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
