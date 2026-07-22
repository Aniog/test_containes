import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Insiders</h2>
        <p className="text-primary-foreground/80 font-light mb-10 text-lg">
          Subscribe to receive 10% off your first order, early access to new collections, and styling tips.
        </p>
        
        {submitted ? (
          <div className="bg-primary-foreground/10 p-6">
            <p className="font-serif text-xl">Thank you for subscribing.</p>
            <p className="text-sm mt-2">Check your email for your welcome code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border-b border-primary-foreground/30 py-3 px-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-primary-foreground text-primary px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors shrink-0"
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