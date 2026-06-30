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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
          Join the Velmora Family
        </h2>
        <div className="divider w-20 mx-auto my-6" />
        <p className="text-muted text-lg mb-8">
          Subscribe to our newsletter and receive 10% off your first order. 
          Be the first to know about new collections, exclusive offers, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-sm">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1">Check your email for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 border border-border/50 focus:border-accent focus:outline-none 
                         bg-white text-foreground placeholder:text-muted/50"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}

        <p className="text-sm text-muted/70 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
