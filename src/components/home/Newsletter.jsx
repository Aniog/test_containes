import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-cream/60 mb-3">
          Sign up for exclusive access to new releases, styling tips, and 10% off your first order.
        </p>
        <div className="w-16 h-px bg-gold mx-auto mb-10" />

        {isSubmitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-2xl text-gold mb-2">Welcome to the circle</p>
            <p className="text-cream/60">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-cream/30 text-xs mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;