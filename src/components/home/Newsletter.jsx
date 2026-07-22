import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-24 bg-velmora-black text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/60 text-sm mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-velmora-gold transition-colors"
            required
          />
          <button type="submit" className="bg-velmora-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold-dark transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-white/30 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
