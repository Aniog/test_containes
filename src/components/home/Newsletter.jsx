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
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-[10px] tracking-ultra uppercase text-gold-light mb-4">Join Velmora</p>
        <h2 className="font-serif text-3xl lg:text-4xl text-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-sm text-cream/50 mb-10 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="bg-cream/10 border border-cream/20 rounded-sm px-6 py-5">
            <p className="text-sm text-cream/80 font-serif italic">Thank you — your code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-cream/10 border border-cream/20 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold-light rounded-sm transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold hover:bg-gold-dark text-cream text-xs tracking-widest uppercase font-medium transition-colors rounded-sm"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[10px] text-cream/30 mt-5">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
