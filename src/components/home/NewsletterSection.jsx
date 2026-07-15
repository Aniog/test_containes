import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-accent text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-14 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-white/90 font-light">
          Be the first to know about new arrivals, limited editions, and quiet
          luxury inspiration.
        </p>
        {submitted ? (
          <p className="mt-8 text-white font-medium">
            Thank you — your code is on its way.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
            />
            <Button variant="white" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        )}
        <p className="mt-4 text-[10px] uppercase tracking-widest text-white/70">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
