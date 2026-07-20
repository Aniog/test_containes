import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="bg-accent px-6 py-14 text-center md:px-16 md:py-20">
          <p className="text-xs uppercase tracking-brand text-white/80">
            Join the Inner Circle
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl text-white md:text-4xl lg:text-5xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/80">
            Be the first to know about new arrivals, styling notes, and
            subscriber-only moments.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-xl text-white">
              Welcome to Velmora — check your inbox.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 border-b border-white/40 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-brand text-white transition-colors hover:bg-foreground/90"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
