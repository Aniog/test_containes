import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <section className="bg-ink text-cream relative overflow-hidden">
      {/* Decorative gold thread */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-4">
            The Velmora List
          </p>
          <h2 className="font-serif font-light text-3xl md:text-5xl leading-[1.05]">
            Join for 10% off
            <br />
            your first order.
          </h2>
          <p className="mt-6 text-cream/75 max-w-md leading-relaxed">
            Quiet emails, twice a month — early access to new arrivals, styling
            notes from the studio, and the occasional invitation.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full"
          aria-label="Newsletter signup"
        >
          {status === 'success' ? (
            <div className="border border-champagne/40 bg-cream/5 px-6 py-8 text-cream">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-champagne" strokeWidth={2} />
                </span>
                <p className="font-serif text-xl">Welcome to Velmora.</p>
              </div>
              <p className="text-sm text-cream/75">
                Your 10% code is on its way to <strong>{email}</strong>. Check
                your inbox.
              </p>
            </div>
          ) : (
            <>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border border-cream/30 focus:border-champagne text-cream placeholder:text-cream/50 px-5 py-4 text-sm tracking-wide outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-champagne text-ink hover:bg-cream px-8 py-4 text-xs tracking-[0.3em] uppercase transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
                </button>
              </div>
              {error && (
                <p className="mt-3 text-xs text-champagne tracking-wide">
                  {error}
                </p>
              )}
              <p className="mt-4 text-xs text-cream/55">
                By subscribing you agree to our privacy policy. Unsubscribe any
                time.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
