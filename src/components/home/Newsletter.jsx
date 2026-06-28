import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-velmora-ink text-velmora-cream">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="newsletter-bg-velmora-3c2a"
        data-strk-bg="[newsletter-title] warm soft gold jewelry on dark moody fabric editorial blurred"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold mb-5">
          The Velmora Letter
        </p>
        <h2
          id="newsletter-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light max-w-2xl mx-auto leading-[1.1]"
        >
          Join for 10% off your first order.
        </h2>
        <p className="mt-6 text-velmora-cream/70 max-w-md mx-auto">
          Early access to new collections, styling notes, and members-only offers.
        </p>

        {submitted ? (
          <p className="mt-10 font-serif text-2xl text-velmora-gold">
            Welcome to Velmora — check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 sm:border-b sm:border-velmora-cream/30"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-velmora-cream/30 sm:border-0 py-3 px-2 text-velmora-cream placeholder:text-velmora-cream/50 focus:outline-none focus:border-velmora-gold"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-7 py-3 text-xs uppercase tracking-[0.3em] text-velmora-cream hover:text-velmora-gold transition-colors"
            >
              Subscribe →
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
