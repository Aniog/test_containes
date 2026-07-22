import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Welcome to Velmora — your 10% off code is on its way!');
    setEmail('');
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="bg-velmora-charcoal text-center px-6 py-16 md:py-20">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-white">
          Join for 10% off your first order
        </h2>
        <p className="mt-3 text-white/50 font-light text-sm md:text-base max-w-md mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
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
            required
            className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Get 10% Off
          </button>
        </form>

        <p className="mt-4 text-xs text-white/30">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
