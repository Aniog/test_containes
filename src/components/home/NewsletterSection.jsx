import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success('Welcome to Velmora. Your 10% off code is VELMORA10.');
    setEmail('');
  };

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ivory/80">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl font-light text-ivory md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ivory/85">
          Be the first to know about new arrivals, limited drops, and styling
          inspiration — delivered quietly to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border-b-2 border-ivory/40 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/60 focus:border-ivory focus:outline-none"
          />
          <Button
            type="submit"
            variant="outline"
            className="border-ivory text-ivory hover:bg-ivory hover:text-gold-dark"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
