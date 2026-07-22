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
    <section className="bg-velmora-charcoal">
      <div className="container-wide section-padding py-16 md:py-20 text-center">
        <p className="font-sans text-[10px] tracking-superwide uppercase text-velmora-gold/70 mb-3">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-white mb-3">
          Get 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/50 mb-8 max-w-md mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-velmora-goldlight text-sm animate-fade-in">
            Thank you! Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-velmora-gold/50 transition-colors"
            />
            <button type="submit" className="btn-accent text-xs whitespace-nowrap w-full sm:w-auto">
              Sign Up
            </button>
          </form>
        )}

        <p className="text-[10px] text-white/25 mt-5">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
