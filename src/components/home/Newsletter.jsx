import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Stay in the Know
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-stone mb-8">
          Subscribe to receive exclusive early access to new collections, styling tips, and your first order discount.
        </p>

        {submitted ? (
          <div className="bg-gold/10 border border-gold/20 py-6 px-8">
            <p className="font-serif text-lg text-charcoal">Welcome to Velmora</p>
            <p className="font-sans text-sm text-stone mt-1">Check your inbox for your exclusive code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-border px-4 py-3 font-sans text-sm text-charcoal placeholder:text-stone-light focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
