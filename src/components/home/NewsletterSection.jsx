import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="mx-auto px-5 md:px-8 lg:px-12 max-w-3xl text-center text-white">
        <h2 className="font-serif text-3xl md:text-5xl font-medium">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-white/90 font-light">
          Subscribe for exclusive early access, styling tips, and a welcome gift on
          your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-ink text-cream-50 text-sm font-medium tracking-widest uppercase hover:bg-ink-light transition-colors"
          >
            {submitted ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>

        <p className="mt-4 text-xs text-white/70">
          By subscribing, you agree to receive marketing emails from Velmora.
        </p>
      </div>
    </section>
  );
}
