import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-ivory">
      <div className="container-page py-20 md:py-28">
        <div className="relative bg-ink text-ivory overflow-hidden">
          {/* decorative bg img */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            data-strk-bg-id="newsletter-bg-1a9c2e"
            data-strk-bg="[newsletter-eyebrow] [newsletter-headline]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
          />

          <div className="relative px-8 md:px-16 lg:px-24 py-20 md:py-28 max-w-3xl">
            <p id="newsletter-eyebrow" className="eyebrow text-gold-soft">
              The Letter
            </p>
            <h2
              id="newsletter-headline"
              className="mt-4 font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-ivory leading-[1.05]"
            >
              Join for <em className="italic text-gold-soft">10% off</em> your first order.
            </h2>
            <p className="mt-5 text-base text-ivory/70 max-w-xl">
              Twice a month, letters from the studio — early access, styling notes, and the occasional invitation.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 max-w-md"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent border border-ivory/30 sm:border-r-0 px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-ivory transition-colors duration-300 ease-editorial"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white px-7 py-4 text-[11px] uppercase tracking-widest-2 hover:bg-gold-deep transition-colors duration-300 ease-editorial"
              >
                {submitted ? (
                  <>
                    <Check className="w-3.5 h-3.5" strokeWidth={1.6} /> Welcome
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-[11px] uppercase tracking-widest-2 text-ivory/40">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
