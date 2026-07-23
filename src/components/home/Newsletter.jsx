import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Welcome to Velmora! Your 10% off code is VELMORA10');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-blush">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velvet font-medium">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-taupe font-light">
          Subscribe for 10% off your first order, early access to new collections, and
          styling inspiration delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3.5 bg-cream border border-linen text-velvet text-sm placeholder:text-taupe/60 focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-gold text-velvet text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-hover transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-[10px] text-taupe/70 uppercase tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
