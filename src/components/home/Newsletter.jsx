import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-charcoal">
      <div className="container-page py-20 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-cream font-light tracking-wide">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-3 text-sm font-sans text-stone leading-relaxed">
            Sign up for early access to new collections, exclusive offers, and
            jewelry care tips. Unsubscribe anytime.
          </p>

          {submitted ? (
            <p className="mt-8 text-sm font-sans text-gold-light font-medium">
              Thank you! Your discount code is on its way.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-cream text-sm font-sans placeholder:text-stone focus:outline-none focus:border-gold-light transition-colors"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
