import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velmora-base px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold-light">
          Join the List
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm font-light leading-relaxed text-white/75">
          Be the first to know about new collections, restocks, and member-only
          exclusives. No spam, just sparkle.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-sm border border-white/20 bg-white/5 px-6 py-5">
            <p className="font-serif text-xl text-white">
              Welcome to Velmora — your code is on its way.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-12 flex-1 border border-white/20 bg-white/10 px-4 font-sans text-sm text-white placeholder:text-white/40 focus:border-velmora-gold focus:outline-none"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-velmora-gold text-white hover:bg-velmora-gold-light"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
