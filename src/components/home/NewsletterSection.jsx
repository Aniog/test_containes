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
  };

  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-ink/80 mb-8 md:mb-10">
          Subscribe for first access to new arrivals, styling notes, and a little welcome gift on your first order.
        </p>

        {status === 'success' ? (
          <p className="font-serif text-2xl text-ink">Welcome to Velmora. Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-cream text-ink placeholder:text-taupe font-sans text-sm border-0 focus:ring-2 focus:ring-ink outline-none"
            />
            <Button variant="outline" size="md" type="submit" className="border-ink hover:bg-ink hover:text-cream">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-ink/60 font-sans mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
