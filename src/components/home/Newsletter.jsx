import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-cream">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-velmora-muted-light font-sans">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 animate-fade-in">
            <p className="font-serif text-lg text-velmora-gold">Welcome to Velmora.</p>
            <p className="text-sm text-velmora-muted-light mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full md:w-auto flex-1 bg-transparent border border-velmora-muted-light text-velmora-cream px-4 py-3 text-sm font-sans placeholder:text-velmora-muted-light focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-velmora-gold text-velmora-white px-8 py-3 text-xs uppercase tracking-nav font-sans font-medium hover:bg-velmora-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
