import React, { useState } from 'react';

export default function Newsletter() {
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
    <section className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">Join for 10% Off</h2>
        <p className="text-muted-foreground/70 mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="fade-in">
            <p className="serif-heading text-2xl mb-2">Welcome to Velmora</p>
            <p className="text-muted-foreground/70 text-sm">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              required
            />
            <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-opacity-90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
