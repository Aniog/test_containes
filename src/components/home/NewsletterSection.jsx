import { useState } from 'react';

export default function NewsletterSection() {
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
    <section className="bg-accent py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
        <h2 className="font-serif text-3xl text-white md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
          Subscribe to receive exclusive early access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm font-medium uppercase tracking-widest text-white">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 bg-white/15 px-5 py-3.5 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-white/30 transition-all focus:ring-white"
            />
            <button
              type="submit"
              className="bg-surface px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-base transition-colors hover:bg-canvas"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
