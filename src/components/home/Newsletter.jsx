import { useState } from 'react';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="serif-heading text-3xl md:text-4xl text-primary-foreground mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-primary-foreground/80 mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/50"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary-foreground text-primary text-sm tracking-widest uppercase hover:bg-opacity-90 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
