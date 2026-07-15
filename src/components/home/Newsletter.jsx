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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          Join for 10% Off
        </h2>
        <p className="text-cream/60 mb-10 text-sm">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-gold hover:bg-gold-hover text-cream text-xs tracking-widest uppercase px-8 py-3 transition-colors duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
