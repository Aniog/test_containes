import { useState } from 'react';

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
    <section className="py-20 md:py-24 bg-cream">
      <div className="max-w-[560px] mx-auto px-6 text-center">
        <h2 className="font-serif text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-text-primary">
          Join the Inner Circle
        </h2>
        <p className="text-[14px] text-text-secondary mt-4 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. Get 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-accent text-[14px]">Welcome to the family. Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 h-12 px-4 border border-border bg-white text-[13px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="h-12 px-8 bg-accent text-white text-[12px] uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-text-muted mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
