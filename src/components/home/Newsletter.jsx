import { useState } from 'react';
import { useToast } from '@/components/ui/Toast';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { push } = useToast();
  const ref = useReveal();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      push({ title: 'Please enter a valid email' });
      return;
    }
    setSubmitted(true);
    push({ title: 'Welcome to Velmora', description: 'Your 10% code is on its way.' });
    setEmail('');
  };

  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden bg-espresso px-6 py-16 text-center text-bone sm:px-10 sm:py-20 md:px-16"
        >
          {/* Subtle decorative gold corner */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-24 w-24 -translate-x-6 -translate-y-6 rounded-full bg-gold-soft/10 blur-2xl"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-32 w-32 translate-x-8 translate-y-8 rounded-full bg-gold-soft/10 blur-3xl"
          />

          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-soft">
            The Velmora list
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight sm:text-5xl md:text-[3.5rem]">
            Join for 10% off your first order.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-bone/80">
            Quiet drops, early access, and the occasional journal entry. No
            noise, no spam — just a thoughtful note every few weeks.
          </p>

          {submitted ? (
            <div className="mt-2 font-serif text-2xl italic text-bone">
              Thank you — check your inbox.
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-2 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@yours.com"
                className="flex-1 border border-bone/20 bg-transparent px-4 py-3.5 text-sm text-bone placeholder:text-bone/40 focus:border-bone/60 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-bone px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.24em] text-espresso transition-colors duration-300 hover:bg-gold-soft"
              >
                Subscribe
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
