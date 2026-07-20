import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="bg-accent px-6 py-14 md:py-20 text-center text-accent-foreground">
          <p className="text-xs uppercase tracking-extra-wide opacity-80 mb-4">
            Insider Access
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-5">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm md:text-base opacity-90 max-w-md mx-auto mb-8">
            Subscribe for exclusive early access, styling notes, and 10% off your first order.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-accent-foreground text-foreground placeholder:text-muted/70 text-sm focus:outline-none focus:ring-2 focus:ring-accent-foreground/50"
            />
            <Button
              type="submit"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-foreground sm:whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm opacity-90">Thank you. Your code is on its way.</p>
          )}
        </div>
      </div>
    </section>
  );
}
