import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-champagne">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-eyebrow text-gold-deep font-medium">
              The Insider
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light text-espresso leading-tight">
              Join for 10% off your<br className="hidden md:block" /> first order.
            </h2>
            <p className="mt-5 text-charcoal max-w-md leading-relaxed">
              Quiet emails, never noise. New collections, styling notes, and early access — sent rarely, sent well.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="w-full"
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-espresso/60 sm:border-r-0 px-5 py-4 text-sm text-espresso placeholder:text-espresso/50 focus:outline-none focus:border-espresso"
              />
              <button
                type="submit"
                className="bg-espresso text-ivory px-8 py-4 text-xs uppercase tracking-eyebrow font-medium hover:bg-charcoal transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-espresso/70">
              By subscribing, you agree to our Privacy Policy.
            </p>
            {submitted && (
              <p className="mt-4 text-sm text-espresso font-medium">
                Welcome — your code is on its way.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
