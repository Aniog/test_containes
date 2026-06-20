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
    <section className="py-20 md:py-32 bg-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
          Join the Velmora Circle
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-ink-muted text-lg mb-10">
          Sign up for exclusive access to new collections, styling tips, and <span className="text-gold font-medium">10% off your first order</span>.
        </p>

        {isSubmitted ? (
          <div className="py-8">
            <p className="font-serif text-2xl text-cream mb-2">Welcome to the circle</p>
            <p className="text-ink-muted">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-base border border-gold/30 text-cream placeholder:text-ink-muted focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-base font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-ink-muted text-xs mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
