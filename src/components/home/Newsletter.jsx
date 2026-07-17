import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

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
    <section className="bg-velmora-accent py-16 md:py-20">
      <div className="px-5 md:px-8 lg:px-12 xl:px-16 max-w-3xl mx-auto text-center text-white">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-white/90 font-light">
          Subscribe for early access to new collections, styling notes, and
          exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-white">
            <Check size={20} />
            <span className="font-sans text-sm uppercase tracking-widest">
              Thank you — check your inbox for your code.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 appearance-none border-b-2 border-white/40 bg-transparent px-1 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none font-sans text-sm"
            />
            <Button
              type="submit"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-velmora-accent"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
