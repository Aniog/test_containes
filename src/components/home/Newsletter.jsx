import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Welcome to Velmora — your 10% code is on its way.');
    setEmail('');
  };

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Join the List
        </p>
        <h2 className="font-playfair text-3xl font-medium text-white md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm font-light text-white/70">
          Be the first to know about new arrivals, limited drops, and styling
          notes from the studio.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 flex-1 rounded-none border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus-visible:ring-gold"
            required
          />
          <Button
            type="submit"
            className="h-12 rounded-none bg-gold px-8 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-gold-hover"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
