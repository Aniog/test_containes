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
    <section className="py-20 md:py-32 bg-[#2d2d2d] text-white">
      <div className="container-luxury max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          Join the Velmora Circle
        </h2>
        <p className="font-light text-lg mb-12 opacity-90">
          Subscribe for exclusive access, early releases, and 10% off your first order
        </p>

        {isSubmitted ? (
          <div className="bg-[#c9a96e] bg-opacity-20 p-8 rounded">
            <p className="font-serif text-2xl mb-2">Thank You!</p>
            <p className="font-light">
              Your discount code will arrive in your inbox shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-transparent border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-[#c9a96e] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#c9a96e] text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-[#b8945a] transition-colors whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}

        <p className="text-xs text-white text-opacity-50 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
