import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 700);
  };

  return (
    <section className="bg-espresso py-16 text-ivory md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="reveal text-[11px] uppercase tracking-[0.35em] text-gold">The Velmora Letter</p>
        <h2 className="reveal mt-4 font-serif text-3xl font-light leading-tight md:text-5xl">
          Join for 10% off
          <br />
          your first order
        </h2>
        <p className="reveal mx-auto mt-5 max-w-md text-sm leading-relaxed text-ivory/70">
          New arrivals, styling notes and early access to limited pieces — about twice a month,
          never noise.
        </p>

        {status === 'success' ? (
          <div className="reveal mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-gold/40 bg-gold/10 px-6 py-4">
            <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <p className="text-sm text-ivory">
              Welcome to Velmora — your code <span className="font-semibold text-gold">VELMORA10</span> is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-ivory/25 bg-transparent px-5 py-4 text-sm text-ivory outline-none transition-colors placeholder:text-ivory/45 focus:border-gold"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-espresso transition-colors duration-300 hover:bg-ivory disabled:opacity-60"
            >
              {status === 'submitting' ? 'Joining…' : 'Subscribe'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </form>
        )}
        {error && (
          <p className="mt-3 text-xs text-gold" role="alert">
            {error}
          </p>
        )}
        <p className="mt-5 text-[11px] tracking-wide text-ivory/45">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
